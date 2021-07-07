// 76. 最小覆盖子串
// 给你一个字符串 s 、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 "" 。

// 注意：如果 s 中存在这样的子串，我们保证它是唯一的答案。

// 示例 1：

// 输入：s = "ADOBECODEBANC", t = "ABC"
// 输出："BANC"
// 示例 2：

// 输入：s = "a", t = "a"
// 输出："a"
 

// 提示：

// 1 <= s.length, t.length <= 105
// s 和 t 由英文字母组成
 

// 进阶：你能设计一个在 o(n) 时间内解决此问题的算法吗？
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    let l=0;
    let r=0;
    let need=new Map();
    for (let a of t){
        need.set(a,need.has(a)?need.get(a)+1 : 1)
    }
    let needType=need.size;
    let res='';
    while(r < s.length){
        let c=s[r]
        if(need.has(c)){
            need.set(c,need.get(c)-1)
            if(need.get(c)===0)needType-=1
        }
        while(needType===0){
            let newRes=s.substring(l,r+1);
            if(!res || (newRes.length<res.length)){
                res=newRes
            }
            let d=s[l]
            if(need.has(d)){
                 need.set(d,need.get(d)+1)
                 if(need.get(d)===1)needType += 1
            }
            l++;
        }
        r++
    }
    return res
};





