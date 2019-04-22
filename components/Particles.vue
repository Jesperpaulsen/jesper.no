<!--
Inspired by and credit to: https://codepen.io/deanwagman/pen/EjLBdQ by Dean Wagman
-->

<template>
  <div>
    <canvas
      ref="canvas"
      style="position: fixed"
      @mousedown="mouseClicked"
    />
    <div class="flex-container" style="margin-top: 150px">
      <Menu @mousedown="mouseClicked" />
    </div>
  </div>
</template>

<script>

import Menu from './Menu'
export default {
  components: { Menu },
  data() {
    return {
      c: 0,
      canvas: {},
      centerX: 0,
      centerY: 0,
      colorPalettes: {
        bg: { r: 36, g: 9, b: 29 },
        matter: [
          { r: 36, g: 18, b: 42 },
          { r: 78, g: 36, b: 42 },
          { r: 252, g: 178, b: 96 },
          { r: 253, g: 238, b: 152 }
        ]
      },
      config: {
        particleNumber: 200,
        maxParticleSize: 10,
        maxSpeed: 30,
        colorVariation: 50
      },
      context: {},
      particles: [],
      r: 0,
      x: 0,
      y: 0
    }
  },
  computed: {
    globalEvent() {
      return this.$store.getters.event
    }
  },
  watch: {
    globalEvent(val) {
      this.mouseClicked(val)
    }
  },
  mounted() {
    // Sets refs
    this.canvas = this.$refs.canvas
    console.log(window.innerWidth)
    this.canvas.width = window.innerWidth
    this.canvas.height = window.innerHeight
    this.context = this.canvas.getContext('2d')
    this.centerX = this.canvas.width / 2
    this.centerY = this.canvas.height / 2
    this.drawBackground()
    this.frame()
    this.initParticles(this.config.particleNumber)
    this.firstFrame()
  },
  methods: {
    // Draws the background
    drawBackground() {
      this.context.fillStyle = 'rgb(' + this.colorPalettes.bg.r + ',' + this.colorPalettes.bg.g + ',' + this.colorPalettes.bg.b + ')'
      this.context.fillRect(0, 0, this.canvas.width, this.canvas.height)
    },
    // Constructs new Particles
    newParticle(x, y) {
      return {
        x: x || Math.round(Math.random() * this.canvas.width),
        y: y || Math.round(Math.random() * this.canvas.height),
        r: Math.ceil(Math.random() * this.config.maxParticleSize),
        c: this.colorVariation(this.colorPalettes.matter[Math.floor(Math.random() * this.colorPalettes.matter.length)], true),
        s: Math.pow(Math.ceil(Math.random() * this.config.maxSpeed), 0.7),
        d: Math.round(Math.random() * 360)
      }
    },
    // Generates random colors from the ColorPallete.
    // Returns a modified rgba object or a rgba string if true is passed in for argument number 2
    colorVariation(color, returnString) {
      const r = Math.round(((Math.random() * this.config.colorVariation) - (this.config.colorVariation / 2)) + color.r),
            g = Math.round(((Math.random() * this.config.colorVariation) - (this.config.colorVariation / 2)) + color.g),
            b = Math.round(((Math.random() * this.config.colorVariation) - (this.config.colorVariation / 2)) + color.b),
            a = Math.random() + 0.5

      if (returnString) return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')'
      else return { r, g, b, a }
    },
    // Draws a particle
    drawParticle(x, y, r, c) {
      this.context.beginPath()
      this.context.fillStyle = c
      this.context.arc(x, y, r, 0, 2 * Math.PI, false)
      this.context.fill()
      this.context.closePath()
    },
    // Calculates the particles' next step
    updateParticleModel(p) {
      const a = 180 - (p.d + 90)
      p.d > 0 && p.d < 180 ? p.x += p.s * Math.sin(p.d) / Math.sin(p.s) : p.x -= p.s * Math.sin(p.d) / Math.sin(p.s)
      p.d > 90 && p.d > 270 ? p.y += p.y += p.s * Math.sin(a) / Math.sin(p.s) : p.y -= p.s * Math.sin(a) / Math.sin(p.s)
      return p
    },
    // Removes particles that are not on the canvas
    cleanUpArray() {
      this.particles = this.particles.filter(p => {
        return (p.x > -100 && p.y > -100)
      })
    },
    // Initalize particles
    initParticles(numParticles, x, y) {
      for (let i = 0; i < numParticles; i++) {
        this.particles.push(this.newParticle(x, y))
      }
      this.particles.forEach(p => {
        this.drawParticle(p.x, p.y, p.r, p.c)
      })
    },
    frame() {
      this.drawBackground()
      this.particles.map(p => {
        return this.updateParticleModel(p)
      })
      this.particles.forEach(p => {
        this.drawParticle(p.x, p.y, p.r, p.c)
      })
      this.requestAnimationFrame(this.frame)
    },
    firstFrame() {
      this.drawBackground()
      this.initParticles(this.config.particleNumber)
    },
    mouseClicked(event) {
      const x = event.clientX,
            y = event.clientY
      this.cleanUpArray()
      this.initParticles(this.config.particleNumber, x, y)
    },
    requestAnimationFrame(frame) {
      return window.requestAnimationFrame(frame) || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback) {
        window.setTimeout(callback, 1000 / 0)
      }
    }
  }
}
</script>

<style>
  .flex-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
