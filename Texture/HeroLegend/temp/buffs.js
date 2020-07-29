
cc.Class({
    extends: cc.Component,

    properties: {
    },

    // onLoad () {},

    start () {
        Global.buffs = this;
        // this.childrens = this.node.children;
        // cc.loader.loadRes("icon/HP", cc.SpriteAtlas, function (err, atlas) {
        //     this.spAtlas = atlas;
        // }.bind(this));
        // cc.loader.loadRes("prefabs/buff_1", function (err, prefab) {
        //     this.prefab_1 = prefab;
        // }.bind(this));
        // this.init();
    },
    init(){
        // this.count = 0;
        // this.node.destroyAllChildren();
    },
    create_1(pos) {
        for (let index = 0; index < 2; index++) {
            let name = "HP_" + this.count;
            this.count = ++this.count % 3;

            let newNode = cc.instantiate(this.prefab_1);
            newNode.getComponent(cc.Sprite).spriteFrame = this.spAtlas.getSpriteFrame(name);
            newNode.position = pos;
            this.node.addChild(newNode);
            newNode.isAni = true;
            let act_1 = cc.jumpBy(1, cc.v2(-80 + index * 160,0), 40, 2);
            let act_2 = cc.callFunc(function () {
                newNode.isAni = false;
            })
            newNode.runAction(cc.sequence(act_1,act_2));
        }
    }

    // update (dt) {},
});
