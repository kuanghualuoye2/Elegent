var adv = 0;
var body = [
    { 'row': 3, 'col': 5 },
    { 'row': 3, 'col': 4 },
    { 'row': 3, 'col': 3 },
    { 'row': 3, 'col': 2 }
];
var gamebox = document.querySelector(".Game");
function Game() {
    this.row = 25;
    this.col = 25;
    this.init();
    this.tr = document.querySelectorAll("tr");
}
Game.prototype.init = function () {
    this.dom = document.createElement("table")
    let tr, td;
    for (let i = 0; i < this.row; i++) {
        tr = document.createElement('tr');  // 创建行
        for (let j = 0; j < this.col; j++) {
            td = document.createElement('td');  // 创建列
            tr.appendChild(td);     // 把列追加到行
        }
        this.dom.appendChild(tr);   // 把行追加到表格
    }
    gamebox.appendChild(this.dom)
}
Game.prototype.setColorHead = function (row, col) {
    this.tr[row].children[col].style.background = "red";
}
Game.prototype.setColor = function (row, col, color) {
    this.tr[row].children[col].style.background = color;
}
var game = new Game();

function Snake() {
    // 蛇的初始化身体
    this.body = [
        { 'row': 3, 'col': 5 },
        { 'row': 3, 'col': 4 },
        { 'row': 3, 'col': 3 },
        { 'row': 3, 'col': 2 }
    ];
}
Snake.prototype.render = function (body) {
    game.setColorHead(body[0].row, body[0].col);
    for (var i = 1; i < body.length; i++) {
        game.setColor(body[i].row, body[i].col, '#649c49')
    }
}
Snake.prototype.run = function (rowdir, coldir) {
    window.clearInterval(adv);
    adv = setInterval(() => {
        //撞墙
        if (this.body[0].row < 0 || this.body[0].row > 24 || this.body[0].col < 0 || this.body[0].col > 24) {
            window.clearInterval(adv);
            for (var i = 0; i < this.body.length; i++) {
                game.setColor(this.body[i].row, this.body[i].col, '#fce4ec');
            }
            alert("游戏结束,重新开始游戏");
            this.body = JSON.parse(JSON.stringify(body))
            snake.render(this.body);
        }
        // 捕食
        if (this.body[0].row == food.row && this.body[0].col == food.col) {
            game.setColor(food.row, food.col, '#fce4ec');
            this.body.push({ row: this.body[this.body.length - 1].row - 1, col: this.body[this.body.length - 1].col - 1 })
            food.rom()
        }
        var arr = [];
        //蛇头
        this.snakehead = this.body[0];
        //蛇身 
        this.snakearr = JSON.parse(JSON.stringify(this.body.slice(1, this.body.length)));
        //尾减
        game.setColor(this.body[this.body.length - 1].row, this.body[this.body.length - 1].col, "#fce4ec")
        for (var i = 0; i < this.body.length; i++) {
            // this.body[i].col += 1;
            if (i == 0) {
                arr.push({
                    row: this.body[i].row + rowdir,
                    col: this.body[i].col + coldir
                })
                // this.body[i].row += 1;
                // this.body[i].col += 0;
            }
            else {
                // this.body[i].row = this.body[i - 1].row;
                // this.body[i].col = this.body[i - 1].col;
                arr.push({
                    row: this.body[i - 1].row,
                    col: this.body[i - 1].col,
                })
            }
        }
        this.body = arr;
        console.log(this.body[0]);
        snake.render(this.body);
    }, 300);
}
document.onkeydown = function (e) {
    // 左37 上38 右39 下40
    console.log(e.keyCode);
    switch (e.keyCode) {
        case 37:
            snake.run(0, -1);
            break;
        case 38:
            snake.run(-1, 0);
            break;
        case 39:
            snake.run(0, 1);
            break;
        case 40:
            snake.run(1, 0);
            break;
        default:
            break;
    }
}
// 食物
function Food() {
    this.col;
    this.row;
    this.rom();
    console.log(this.col, this.row);
}
Food.prototype.rom = function () {
    for (let i = 0; i < snake.body.length; i++) {
        this.col = parseInt(Math.random() * 25);
        this.row = parseInt(Math.random() * 25);
        if (this.row != snake.body[i].row && this.col != snake.body[i].col) {
            game.setColor(this.row, this.col, "#84adea");
            break;
        } else {
            this.col = parseInt(Math.random() * 25);
            this.row = parseInt(Math.random() * 25);
        }
    }
}
var snake = new Snake();
var food = new Food();
snake.render(body);