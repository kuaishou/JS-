// 给你 k 枚相同的鸡蛋，并可以使用一栋从第 1 层到第 n 层共有 n 层楼的建筑。

// 已知存在楼层 f ，满足 0 <= f <= n ，任何从 高于 f 的楼层落下的鸡蛋都会碎，从 f 楼层或比它低的楼层落下的鸡蛋都不会破。

// 每次操作，你可以取一枚没有碎的鸡蛋并把它从任一楼层 x 扔下（满足 1 <= x <= n）。如果鸡蛋碎了，你就不能再次使用它。如果某枚鸡蛋扔下后没有摔碎，则可以在之后的操作中 重复使用 这枚鸡蛋。

// 请你计算并返回要确定 f 确切的值 的 最小操作次数 是多少？

//  
// 示例 1：

// 输入：k = 1, n = 2
// 输出：2
// 解释：
// 鸡蛋从 1 楼掉落。如果它碎了，肯定能得出 f = 0 。 
// 否则，鸡蛋从 2 楼掉落。如果它碎了，肯定能得出 f = 1 。 
// 如果它没碎，那么肯定能得出 f = 2 。 
// 因此，在最坏的情况下我们需要移动 2 次以确定 f 是多少。 
// 示例 2：

// 输入：k = 2, n = 6
// 输出：3
// 示例 3：

// 输入：k = 3, n = 14
// 输出：4

// 作者：力扣 (LeetCode)
// 链接：https://leetcode-cn.com/leetbook/read/top-interview-questions/xmup75/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

/**
 * @param {number} k
 * @param {number} n
 * @return {number}
 */
 var superEggDrop = function(K, N) {
    let memo = Array.from({length: K+1},()=>new Array(N+1).fill(0));
    const dp = (K,N) => {
        // 避免重复计算
        if(memo[K][N]) return memo[K][N];
        if(K === 1) return N;
        if(N === 0) return 0;
        let res = Infinity;
        // 2、二分搜索+递归
        let left = 1;
        let right = N;
        while(left <= right) {
            let mid = Math.floor((left+right)/2);
            let broken = dp(K-1,mid - 1); // 摔碎
            let notBroken = dp(K,N-mid); // 未摔碎
            if(broken > notBroken) {
                right = mid - 1;
                res = Math.min(res,broken+1);
            } else {
                left = mid + 1;
                res = Math.min(res,notBroken+1);
            }
        }
        memo[K][N] = res;
        return res;
    }
    return dp(K,N)
};


let dd=superEggDrop(5,10)
console.log('结果',dd)