const { Tree, TreeNode } = require('../Tree');

const ShopA = new Tree();

const ClothesCategory = new TreeNode('ClothesCategory');
const ElectronicsCategory = new TreeNode('ElctronicCategory');
const Shirts = new TreeNode('Shirts');
const Trousers = new TreeNode('Trousers');
const Home = new TreeNode('Home');
const Tv = new TreeNode('Tv');
const Game = new TreeNode('Game');

ClothesCategory.addChild(Shirts)
ClothesCategory.addChild(Trousers)

ElectronicsCategory.addChild(Home);
ElectronicsCategory.addChild(Tv);
ElectronicsCategory.addChild(Game);

ShopA.insert('ShopA');

ShopA.insert(ClothesCategory, 'ShopA');
ShopA.insert(ElectronicsCategory, 'ShopA');


