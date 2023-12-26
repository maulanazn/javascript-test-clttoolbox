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

        ctx.beginPath()
        ctx.strokeStyle = "gray"
        ctx.shadowOffsetX = 10
        ctx.shadowOffsetY = 10
        ctx.shadowBlur = 10
        ctx.strokeRect(150, 40, 1080, 530);

        ctx.beginPath()
        ctx.strokeStyle = "gray"
        ctx.shadowOffsetX = 10
        ctx.shadowOffsetY = 10
        ctx.shadowBlur = 10
        ctx.strokeRect(2, 2, 1340, 640);

        for (let i = 0; i < 20; i++) {
        }
        ctx.beginPath()
        ctx.moveTo(10, 42);
        ctx.lineTo(150, 42);
        ctx.lineWidth = 2;
        ctx.stroke()
        ctx.moveTo(10, 42);
        ctx.lineTo(150, 82);
        ctx.lineWidth = 2;
        ctx.stroke()
        ctx.moveTo(10, 42);
        ctx.lineTo(150, 42);
        ctx.lineWidth = 2;
        ctx.stroke()
        
        paralelgrain.addEventListener("load", (e) => {
            ctx.drawImage(paralelgrain, 400, 57, 75, 107, 150, 40, 1080, 100)
            ctx.drawImage(paralelgrain, 400, 67, 75, 107, 150, 240, 1080, 100)
            ctx.drawImage(paralelgrain, 400, 39, 75, 107, 150, 470, 1080, 100)
        })
        paralelgrain.src = "../images/paralel-grain-0.jpg"

        perpendiculargrain.addEventListener('load', () => {
            ctx.drawImage(perpendiculargrain, 900, 53, 375 * Math.tan(180), 407, 150, 140, 1080, 100)
            ctx.drawImage(perpendiculargrain, 900, 33, 375 * Math.tan(180), 407, 150, 340, 1080, 130)
        })
        perpendiculargrain.src = "../images/perpendicular-grain-90.jpg"
    },

    /**
     * Draw a layup configuration on the canvas
     *
     * @param {Object} layup Layup object structure
     * @param {Number} length Layup length in mm
     */
    drawLayup : function (layup, length) {
        
    },

    /**
     * Add more functions as you need
     */
};