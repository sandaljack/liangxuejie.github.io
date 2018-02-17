// max - 期望的最大值 
var max = 15;
// var id = parseInt(Math.random()*(max+1),10); 
var id = Math.floor(Math.random()*(max+1)); 

var content = [
  '大爷听过我的歌，小伙亲过我的脸',
  '穷则独善其身，富则妻妾成群',
  '君子成人之美，小人夺人所爱',
  '如果天黑之前来得及，我要挖了你的眼睛',
  '千万别说你一无所有，至少你还有病啊',
  '相爱没有那么容易，每个人都有他的手机',
  '想飞上天和太阳肩并肩',
  '书到用时方恨少，钱到月底不够花',
  '爱真的需要勇气,来面对六眼飞鱼',
  '问君能有几多愁，恰似一群太监上青楼',
  '两个黄鹂鸣翠柳，一行白鹭上西天',
  '你所有为人称道的美丽，都有PS的痕迹',
  '天生我材必有用，老鼠儿子会打洞',
  '你伤害了word，还excel而过',
  '答应我你从此不在深夜里排队',
  '我们坐在高高的骨灰旁边',
];

$('.site-title').html(content[id]);
$('.logo-line-before').attr('style', 'width:90%');
$('.logo-line-after').attr('style', 'width:90%');
// $('.logo-line-after').parents().parents().parents().after('<br>');
// $('.logo-line-after').parent('custom-logo-site-title').siblings('site-nav').before('<br>');
$('.site-nav').before('<br><br>').children('.menu').attr('style','float:left');

$('#menu').append('<li class="menu-item"><a href="/snake.html" rel="section"><i class="menu-item-icon fa fa-fw fa-sitemap"></i> 娱乐</a></li>');
