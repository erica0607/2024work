let twzipcode = new TWzipcode({
    "district": {
        onChange: function (id) {
            console.log(this.nth(id).get());
        }
    }
});

console.log(twzipcode.get());

document.getElementById('act-set-1').addEventListener('click', () => {    
    twzipcode.nth(0).set({
        "county": "臺北市",
        "district": "大安區"
    });
});
document.getElementById('act-set-2').addEventListener('click', () => {    
    twzipcode.nth(1).set('831');
});