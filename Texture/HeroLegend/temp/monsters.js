
cc.Class({
    extends: cc.Component,

    // properties: {
    // },


    // onLoad () {},

    start () {
        Global.monsters = this;
        // this.childrens = this.node.children;
        // this.pos_arr = [cc.v2(-700,0),cc.v2(0,700),cc.v2(700,0),cc.v2(0,-700)];

        // var prefab = cc.loader.getRes("prefabs/monster_1");
        // if (prefab) {
        //     this.createMonster(prefab);
        // } else {
        //     cc.loader.loadRes("prefabs/monster_1", function (err, prefab) {
        //         this.createMonster(prefab);
        //     }.bind(this));
        // }
    },

    createMonster(prefab) {
        for (let index = 0; index < 4; index++) {
            let newNode = cc.instantiate(prefab);
            newNode.position = this.pos_arr[index];
            this.node.addChild(newNode);
        }
    },

    init() {
        // for (let index = 0; index < this.childrens.length; index++) {
        //     let item = this.childrens[index];
        //     item.active = true;
        //     item.position = this.pos_arr[index];
        //     item.getComponent("monster_1").init();
        // }
    }

    // update (dt) {},
});
