;(function (cjs, an) {
  var p // shortcut to reference prototypes
  var lib = {}
  var ss = {}
  var img = {}
  lib.ssMetadata = []
  ;(lib.AnMovieClip = function () {
    this.actionFrames = []
    this.ignorePause = false
    this.gotoAndPlay = function (positionOrLabel) {
      cjs.MovieClip.prototype.gotoAndPlay.call(this, positionOrLabel)
    }
    this.play = function () {
      cjs.MovieClip.prototype.play.call(this)
    }
    this.gotoAndStop = function (positionOrLabel) {
      cjs.MovieClip.prototype.gotoAndStop.call(this, positionOrLabel)
    }
    this.stop = function () {
      cjs.MovieClip.prototype.stop.call(this)
    }
  }).prototype = p = new cjs.MovieClip()
  // symbols:
  ;(lib.FlashAICB = function () {
    this.initialize(img.FlashAICB)
  }).prototype = p = new cjs.Bitmap()
  p.nominalBounds = new cjs.Rectangle(0, 0, 1244, 5810)
  ;(lib.Tween16 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true
    }
    if (reversed == null) {
      reversed = false
    }
    var props = new Object()
    props.mode = mode
    props.startPosition = startPosition
    props.labels = {}
    props.loop = loop
    props.reversed = reversed
    cjs.MovieClip.apply(this, [props])

    // Layer_1
    this.instance = new lib.FlashAICB()
    this.instance.setTransform(-622, -2905)

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1))

    this._renderFirstFrame()
  }).prototype = p = new cjs.MovieClip()
  p.nominalBounds = new cjs.Rectangle(-622, -2905, 1244, 5810)
  ;(lib.Tween15 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true
    }
    if (reversed == null) {
      reversed = false
    }
    var props = new Object()
    props.mode = mode
    props.startPosition = startPosition
    props.labels = {}
    props.loop = loop
    props.reversed = reversed
    cjs.MovieClip.apply(this, [props])

    // Layer_1
    this.instance = new lib.FlashAICB()
    this.instance.setTransform(-622, -2905)

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1))

    this._renderFirstFrame()
  }).prototype = p = new cjs.MovieClip()
  p.nominalBounds = new cjs.Rectangle(-622, -2905, 1244, 5810)

  // stage content:
  ;(lib.cvanimationbg = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = false
    }
    if (reversed == null) {
      reversed = false
    }
    var props = new Object()
    props.mode = mode
    props.startPosition = startPosition
    props.labels = {}
    props.loop = loop
    props.reversed = reversed
    cjs.MovieClip.apply(this, [props])

    this.actionFrames = [58, 201]
    // timeline functions:
    this.frame_100 = function () {
      // this.stop()
    }
    this.frame_201 = function () {
      const event = new Event('videoEnded')

      // Dispatch the event.
      window.dispatchEvent(event)
    }

    // actions tween:
    this.timeline.addTween(cjs.Tween.get(this).wait(100).call(this.frame_100).wait(143).call(this.frame_201).wait(1))

    // bg
    this.instance = new lib.FlashAICB()
    this.instance.setTransform(0, -4483)

    this.instance_1 = new lib.Tween15('synched', 0)
    this.instance_1.setTransform(620, -1578)
    this.instance_1._off = true

    this.instance_2 = new lib.Tween16('synched', 0)
    this.instance_2.setTransform(622, 2906)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.instance }] })
        .to({ state: [{ t: this.instance_1 }] }, 106)
        .to({ state: [{ t: this.instance_2 }] }, 93)
        .to({ state: [] }, 1)
        .wait(2)
    )
    this.timeline.addTween(
      cjs.Tween.get(this.instance_1).wait(106).to({ _off: false }, 0).to({ _off: true, x: 622, y: 2906 }, 93).wait(3)
    )

    this._renderFirstFrame()
  }).prototype = p = new lib.AnMovieClip()
  p.nominalBounds = new cjs.Rectangle(0, -3971, 1244, 9782)
  // library properties:
  lib.properties = {
    id: '206C97A9C21A40D081ADF95D0641F140',
    width: 1226,
    height: 1024,
    fps: 30,
    color: '#CCCCCC',
    opacity: 0.0,
    manifest: [{ src: 'images/FlashAICB.png', id: 'FlashAICB' }],
    preloads: []
  }

  // bootstrap callback support:
  ;(lib.Stage = function (canvas) {
    createjs.Stage.call(this, canvas)
  }).prototype = p = new createjs.Stage()

  p.setAutoPlay = function (autoPlay) {
    this.tickEnabled = autoPlay
  }
  p.play = function () {
    this.tickEnabled = true
    this.getChildAt(0).gotoAndPlay(this.getTimelinePosition())
  }
  p.stop = function (ms) {
    if (ms) this.seek(ms)
    this.tickEnabled = false
  }
  p.seek = function (ms) {
    this.tickEnabled = true
    this.getChildAt(0).gotoAndStop((lib.properties.fps * ms) / 1000)
  }
  p.getDuration = function () {
    return (this.getChildAt(0).totalFrames / lib.properties.fps) * 1000
  }

  p.getTimelinePosition = function () {
    return (this.getChildAt(0).currentFrame / lib.properties.fps) * 1000
  }

  an.bootcompsLoaded = an.bootcompsLoaded || []
  if (!an.bootstrapListeners) {
    an.bootstrapListeners = []
  }

  an.bootstrapCallback = function (fnCallback) {
    an.bootstrapListeners.push(fnCallback)
    if (an.bootcompsLoaded.length > 0) {
      for (var i = 0; i < an.bootcompsLoaded.length; ++i) {
        fnCallback(an.bootcompsLoaded[i])
      }
    }
  }

  an.compositions = an.compositions || {}
  an.compositions['206C97A9C21A40D081ADF95D0641F140'] = {
    getStage: function () {
      return exportRoot.stage
    },
    getLibrary: function () {
      return lib
    },
    getSpriteSheet: function () {
      return ss
    },
    getImages: function () {
      return img
    }
  }

  an.compositionLoaded = function (id) {
    an.bootcompsLoaded.push(id)
    for (var j = 0; j < an.bootstrapListeners.length; j++) {
      an.bootstrapListeners[j](id)
    }
  }

  an.getComposition = function (id) {
    return an.compositions[id]
  }

  an.makeResponsive = function (isResp, respDim, isScale, scaleType, domContainers) {
    var lastW,
      lastH,
      lastS = 1
    window.addEventListener('resize', resizeCanvas)
    resizeCanvas()
    function resizeCanvas() {
      var w = lib.properties.width,
        h = lib.properties.height
      var iw = window.innerWidth,
        ih = window.innerHeight
      var pRatio = window.devicePixelRatio || 1,
        xRatio = iw / w,
        yRatio = ih / h,
        sRatio = 1
      if (isResp) {
        if ((respDim == 'width' && lastW == iw) || (respDim == 'height' && lastH == ih)) {
          sRatio = lastS
        } else if (!isScale) {
          if (iw < w || ih < h) sRatio = Math.min(xRatio, yRatio)
        } else if (scaleType == 1) {
          sRatio = Math.min(xRatio, yRatio)
        } else if (scaleType == 2) {
          sRatio = Math.max(xRatio, yRatio)
        }
      }
      domContainers[0].width = w * pRatio * sRatio
      domContainers[0].height = h * pRatio * sRatio
      domContainers.forEach(function (container) {
        container.style.width = w * sRatio + 'px'
        container.style.height = h * sRatio + 'px'
      })
      stage.scaleX = pRatio * sRatio
      stage.scaleY = pRatio * sRatio
      lastW = iw
      lastH = ih
      lastS = sRatio
      stage.tickOnUpdate = false
      stage.update()
      stage.tickOnUpdate = true
    }
  }
  an.handleSoundStreamOnTick = function (event) {
    if (!event.paused) {
      var stageChild = stage.getChildAt(0)
      if (!stageChild.paused || stageChild.ignorePause) {
        stageChild.syncStreamSounds()
      }
    }
  }
  an.handleFilterCache = function (event) {
    if (!event.paused) {
      var target = event.target
      if (target) {
        if (target.filterCacheList) {
          for (var index = 0; index < target.filterCacheList.length; index++) {
            var cacheInst = target.filterCacheList[index]
            if (cacheInst.startFrame <= target.currentFrame && target.currentFrame <= cacheInst.endFrame) {
              cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h)
            }
          }
        }
      }
    }
  }
})((createjs = createjs || {}), (AdobeAn = AdobeAn || {}))
var createjs, AdobeAn
