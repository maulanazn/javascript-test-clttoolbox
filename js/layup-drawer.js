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
        
        this.drawBoard(ctx, paralelgrain, perpendiculargrain)
    },

    /**
     * Draw a layup configuration on the canvas
     *
     * @param {Object} layup Layup object structure
     * @param {Number} length Layup length in mm
     */
    drawLayup : function (layup, length) {
        
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
        for (let j = 0; j < 6; j++) {
            ctx.beginPath()
            ctx.moveTo(150, j * 99.9);
            ctx.lineTo(1230, j * 99.9)
            ctx.strokeStyle = "#51F728"
            ctx.stroke()
        }
    },

    drawBoard: function(ctx, object1, object2) {
        object1.addEventListener("load", (e) => {
            ctx.drawImage(object1, 400, 57, 75, 107, 150, 40, 1080, 100)
            ctx.drawImage(object1, 400, 67, 75, 107, 150, 240, 1080, 100)
            ctx.drawImage(object1, 400, 39, 75, 107, 150, 470, 1080, 100)
            this.drawGreenLineHorizontal(ctx)
        })
        object1.src = "../images/paralel-grain-0.jpg"
        
        object2.addEventListener('load', () => {
            ctx.drawImage(object2, 900, 53, 375 * Math.tan(180), 407, 150, 140, 1080, 100)
            ctx.drawImage(object2, 900, 33, 375 * Math.tan(180), 407, 150, 340, 1080, 130)
            this.drawGreenLineHorizontal(ctx)
        })
        object2.src = "../images/perpendicular-grain-90.jpg"
    }
};