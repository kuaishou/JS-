var RecentCounter = function() {
this.q=[]
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    this.q.push(t);
    while(this.q[0]<t-3000){
        this.q.shift()
    }
    return this.q.length
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
 var obj = new RecentCounter()
 //var param_1 = obj.ping()
 var param_2 = obj.ping(1)
 var param_3 = obj.ping(100)
 var param_4 = obj.ping(3001)
 var param_5 = obj.ping(3002)

// ["RecentCounter","ping","ping","ping","ping"]
// [[],[1],[100],[3001],[3002]]