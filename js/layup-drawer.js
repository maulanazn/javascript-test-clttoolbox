'use strict';

function LayupDrawer() {
    /**
     * Canvas element
     */
    this.canvas = null;
}

LayupDrawer.prototype = {
    /**
     * Configure the canvas
     *
     * @param {HTMLCanvasElement} canvas  Canvas element
     */
    init : function (canvas) {
        const paralelgrain = new Image();
        const perpendiculargrain = new Image();
        const ctx = canvas.getContext("2d");

        this.drawSmallCanvas(ctx)
        this.drawBigCanvas(ctx)
        
        for (let i = 0; i < 15; i++) {
            ctx.beginPath()
            ctx.moveTo(130, i * 40.7)
            ctx.lineTo(150, i * 40.7)
            ctx.strokeStyle = "gray"
            ctx.stroke();
        }

        for (let i = 0; i < 9; i++) {
            ctx.beginPath()
            ctx.moveTo(i * 150, 590)
            ctx.lineTo(i * 150, 570)
            ctx.strokeStyle = "gray"
            ctx.stroke();
        }

        this.drawNumberText(ctx);
        this.drawBoardInfo(ctx, cltLayup)
        
        this.drawBoard(ctx, paralelgrain, perpendiculargrain);
        
        this.drawExtraInfo(ctx);
    },

    /**
     * Draw a layup configuration on the canvas
     *
     * @param {Object} layup Layup object structure
     * @param {Number} length Layup length in mm
     */
    drawLayup : function (layup, length) {
        const ctx = canvas.getContext("2d");
        this.drawBoardInfo(ctx, layup);
    },

    drawSmallCanvas: function(ctx) {
        ctx.beginPath()
        ctx.strokeStyle = "gray"
        ctx.shadowOffsetX = 10
        ctx.shadowOffsetY = 10
        ctx.shadowBlur = 10
        ctx.strokeRect(150, 40, 1080, 530);
    },

    drawBigCanvas: function(ctx) {
        ctx.beginPath()
        ctx.strokeStyle = "gray"
        ctx.shadowOffsetX = 10
        ctx.shadowOffsetY = 10
        ctx.shadowBolur = 10
        ctx.strokeRect(2, 2, 1340, 640);
    },

    drawGreenLineHorizontal: function(ctx) {
        for (let j = 0; j < 5; j++) {
            ctx.beginPath()
            ctx.moveTo(150, j * 119.9);
            ctx.lineTo(1230, j * 119.9)
            ctx.strokeStyle = "#51F728"
            ctx.stroke()
        }
    },

    drawBoard: function(ctx, object1, object2) {
        object1.addEventListener("load", (e) => {
            ctx.drawImage(object1, 400, 57, 75, 107, 150, 40, 1080, 100)
            ctx.drawImage(object1, 400, 67, 75, 107, 150, 240, 1080, 120)
            ctx.drawImage(object1, 400, 67, 75, 107, 150, 470, 1080, 100)
            this.drawGreenLineHorizontal(ctx)
        })
        object1.src = "../images/paralel-grain-0.jpg"
        
        object2.addEventListener('load', () => {
            // Upper second board
            ctx.drawImage(object2, 150, 140, 180, 100)
            ctx.drawImage(object2, 320, 140, 180, 100)
            ctx.drawImage(object2, 490, 140, 180, 100)
            ctx.drawImage(object2, 660, 140, 180, 100)
            ctx.drawImage(object2, 830, 140, 180, 100)
            ctx.drawImage(object2, 1000, 140, 180, 100)
            ctx.drawImage(object2, 1050, 140, 180, 100)

            // Bottom second board
            ctx.drawImage(object2, 150, 360, 180, 110)
            ctx.drawImage(object2, 320, 360, 180, 110)
            ctx.drawImage(object2, 490, 360, 180, 110)
            ctx.drawImage(object2, 660, 360, 180, 110)
            ctx.drawImage(object2, 830, 360, 180, 110)
            ctx.drawImage(object2, 1000, 360, 180, 110)
            ctx.drawImage(object2, 1050, 360, 180, 110)
            this.drawGreenLineHorizontal(ctx)
        })
        object2.src = "../images/perpendicular-grain-90.jpg"
    },

    drawNumberText: function(ctx) {
        ctx.font = "20px Noto Sans"
        ctx.fillText(180, 90, 88);
        ctx.fillText(120, 90, 250);
        ctx.fillText(60, 100, 415);
        ctx.fillText(0, 110, 575);

        ctx.fillText(150, 1183, 608);
        ctx.fillText(120, 1033, 608);
        ctx.fillText(90, 740, 608);
        ctx.fillText(60, 590, 608);
        ctx.fillText(30, 290, 608);
        ctx.fillText(0, 143, 608);
    },

    drawBoardInfo: function(ctx, layup) {
        ctx.font = "10px Noto Sans"
        ctx.fillText(`${layup.t1.label.toLowerCase()}: ${layup.t1.thickness} ${layup.t1.grade}`, 1250, 80)
        ctx.fillText(`${layup.t2.label.toLowerCase()}: ${layup.t2.thickness} ${layup.t2.grade}`, 1250, 180)
        ctx.fillText(`${layup.t3.label.toLowerCase()}: ${layup.t3.thickness} ${layup.t3.grade}`, 1250, 280)
        ctx.fillText(`${layup.t4.label.toLowerCase()}: ${layup.t4.thickness} ${layup.t4.grade}`, 1250, 410)
        ctx.fillText(`${layup.t5.label.toLowerCase()}: ${layup.t5.thickness} ${layup.t5.grade}`, 1250, 520)
    },

    drawExtraInfo: function(ctx) {
        ctx.font = "20px Noto Sans"
        ctx.fillText("Slab Thickness (mm)", 40, 400)
        ctx.fillText("Primary Direction", 580, 635)
    }
};