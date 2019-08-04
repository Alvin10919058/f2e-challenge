<template>
<div id="mp3-player">
    <div class="container">
        <div class="player" :class="{'show-menu':showMenu}">
            <canvas id="cd_canvas"></canvas>
            <div class="cd-container">
                <img id="cd-cover" class="cd-img" :class="{playing:isPlaying}" src="https://i.scdn.co/image/25caf2051c0e7156c6a9b102a7d2f4841194ac48" alt="">
                <div class="cd_circle"></div>
            </div>
            <div class="btn-area">
                <div class="btn-next">
                    <img src="../../assets/mp3-player/next.svg" alt="">
                </div>
                <div class="btn-prev">
                    <img src="../../assets/mp3-player/prev.svg" alt="">
                </div>
                <div class="btn-random clicked">
                    <img src="../../assets/mp3-player/random.svg" alt="">
                    <span class="random-dot"></span>
                </div>
            </div>
            <div class="control-area">
                <div class="title-area">
                    <h1>test</h1>
                    <p>detail</p>
                </div>
                <div class="play-area">
                    <div class="control-tick" :class="{active:isPlaying}">
                        <img class="tick" :class="{active:isPlaying}" src="../../assets/mp3-player/player.svg" alt="">
                    </div>
                    <img v-show="!isPlaying" @click="play" class="btn-play" src="../../assets/mp3-player/play.svg" alt="">
                    <img v-show="isPlaying" @click="play" class="btn-play" src="../../assets/mp3-player/stop.svg" alt="">
                </div>
                <div class="vol-slider-area">
                    <div class="slider-container">
                        <input type="range" min="0" max="1" step="0.1" class="slider">
                    </div>
                    <img class="sound" src="../../assets/mp3-player/sound.svg" alt="">
                </div>
            </div>
            <div class="music-tick-area">
                <div class="now-time">00:00</div>
                <div class="slider-container">
                    <input type="range" min="0" max="1" step="0.1" class="music-slider">
                </div>
                <div class="total-time">03:42</div>
            </div>
        </div>
        <div class="play-list" :class="{hide:!showMenu}">
            <div class="menu">
                <div class="play-list-search">
                    <input type="text"> 
                    <button><i class="fas fa-search"></i></button>
                </div>
                <div class="option">
                    <h4>播放清單</h4>
                </div>
                <div class="option">
                    <h4>歌手</h4>
                </div>
                <div class="option">
                    <h4>我的最愛</h4>
                </div>
            </div>
            <div class="list-content">
                <div class="list-title">
                    <h2>工作歌單</h2>
                    <div @click="showMenu=!showMenu" class="play-list-switch-btn">
                        <span>List</span>
                        <i class="fas fa-bars"></i>
                    </div>
                </div>
                <div class="list-item-area">
                    <div class="item">
                        <div class="info-area">
                            <h3>I Don't Care</h3>
                            <div class="singer-name">Ed Sheeran</div>
                        </div>
                        <div class="album-time-area">
                            <div class="album-name">single</div>
                            <div class="time">03:42</div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="info-area">
                            <h3>I Don't Care</h3>
                            <div class="singer-name">Ed Sheeran</div>
                        </div>
                        <div class="album-time-area">
                            <div class="album-name">single</div>
                            <div class="time">03:42</div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="info-area">
                            <h3>I Don't Care</h3>
                            <div class="singer-name">Ed Sheeran</div>
                        </div>
                        <div class="album-time-area">
                            <div class="album-name">single</div>
                            <div class="time">03:42</div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="info-area">
                            <h3>I Don't Care</h3>
                            <div class="singer-name">Ed Sheeran</div>
                        </div>
                        <div class="album-time-area">
                            <div class="album-name">single</div>
                            <div class="time">03:42</div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="info-area">
                            <h3>I Don't Care</h3>
                            <div class="singer-name">Ed Sheeran</div>
                        </div>
                        <div class="album-time-area">
                            <div class="album-name">single</div>
                            <div class="time">03:42</div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="info-area">
                            <h3>I Don't Care</h3>
                            <div class="singer-name">Ed Sheeran</div>
                        </div>
                        <div class="album-time-area">
                            <div class="album-name">single</div>
                            <div class="time">03:42</div>
                        </div>
                    </div>
                </div>
                 <div class="picture">
                    <img src="../../assets/mp3-player/cover.jpg" alt="">
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: "week3-index",
  mounted() {
    var _this4 = this;

    var canvas = $("#cd_canvas");
    var ctx = canvas[0].getContext("2d");
    var ww = (canvas[0].width = $(".player").width());
    var hh = (canvas[0].height = $(".cd-img").height() + 60);

    window.addEventListener("resize", function() {
      ww = canvas[0].width = $(".player").width();
      hh = canvas[0].height = $(".cd-img").height() + 60;
    });
    setInterval(function() {
      if (_this4.isPlaying) {
        drawCdArc();
      }
    }, 500);

    function drawCdArc() {
      var cdRadius = 125;
      ctx.fillStyle = "#fff";
      ctx.fillRect(0, 0, ww, hh);
      ctx.save();
      ctx.translate(ww / 2, hh / 2);
      for (var i = 0; i < 3; i++) {
        var randomNum = getRandomNum(5) + 5;
        ctx.beginPath();
        var start_angle = i * randomNum;
        var end_angle = i / 0.5 + Math.PI / randomNum;
        ctx.arc(0, 0, cdRadius + i * 8 + 10, start_angle, end_angle);
        ctx.lineWidth = 3;
        ctx.strokeStyle = "rgba(0,0,0," + (1 - i / 3) + ")";
        ctx.stroke();
      }
      ctx.restore();
    }
    function getRandomNum(length) {
      return Math.floor(Math.random() * length);
    }
  },
  data() {
    return {
      isPlaying: false,
      showMenu: false,
      timer: 0,
      count: 0
    };
  },
  methods: {
    play() {
      this.isPlaying = !this.isPlaying;
      if (!this.isPlaying) {
        this.clearCdArc();
        clearInterval(this.timer);
      } else {
        this.timer = setInterval(this.countFunc, 50);
      }
    },
    countFunc() {
      this.count++;
      //   document.getElementById("cd-cover").style.transform =
      //     "rotate(" + this.count + "deg)";
    },
    clearCdArc() {
      var canvas = $("#cd_canvas");
      var ctx = canvas[0].getContext("2d");
      var ww = (canvas[0].width = $(".player").width());
      var hh = (canvas[0].height = $(".cd-img").height() + 60);

      ctx.save();
      ctx.fillStyle = "#fff";
      ctx.fillRect(0, 0, ww, hh);
      ctx.restore();
    }
  }
};
</script>


<style lang="scss" scoped>
#mp3-player {
  width: 100%;
  height: 100%;
  background-color: #ff8c6e;
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    overflow-y: hidden;
    .player {
      position: relative;
      background-color: #fff;
      border: 3px solid #000;
      margin-top: -10vh;
      //   width: 45vw;
      min-width: 450px;
      //   height: 45vh;
      min-height: 500px;
      border-radius: 4px;
      transition: transform 0.5s, -webkit-transform 0.5s;
      #cd_canvas {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 300px;
      }
      .cd-container {
        position: relative;
        width: 100%;
        height: 300px;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          border-radius: 50%;
          border: 3px solid #000;
          width: 250px;
          height: 250px;
          box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
          animation: aniPlay 5s 0.5s infinite linear,
            aniShake 0.5s 0.5s infinite ease-in-out;
          animation-play-state: paused;
        }
        .playing {
          animation-play-state: running;
        }
        @keyframes aniPlay {
          0% {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
          }

          100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
          }
        }
        @keyframes aniShake {
          0%,
          100% {
            margin-top: 0px;
          }
          50% {
            margin-top: -3px;
          }
        }
        .cd_circle {
          position: absolute;
          top: 43%;
          left: 46%;
          width: 40px;
          height: 40px;
          border: 3px solid #000;
          border-radius: 50%;
          background-color: #fff;
        }
      }
      .btn-area {
        .btn-next,
        .btn-prev,
        .btn-random {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border: 3px solid #000;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          box-shadow: 3px 3px 0 0 #c5c5c5, 6px 6px 0 0 #000;
        }
        .btn-next:hover,
        .btn-prev:hover,
        .btn-random:hover {
          background-color: #c5c5c5;
          box-shadow: 3px 3px 0 0 #000 inset;
        }
        .btn-next {
          position: absolute;
          top: 20px;
          right: 20px;
        }
        .btn-prev {
          position: absolute;
          top: 95px;
          right: 20px;
        }
        .btn-random {
          position: absolute;
          top: 220px;
          right: 20px;
          img {
            width: 65%;
          }
        }
        .clicked {
          background-color: #c5c5c5;
          box-shadow: 3px 3px 0 0 #000 inset;
        }
        .random-dot {
          position: absolute;
          top: 50px;
          right: 15px;
          display: block;
          width: 8px;
          height: 8px;
          border-radius: 100%;
          background-color: #000;
        }
      }
      .control-area {
        box-sizing: border-box;
        height: 130px;
        padding: 0 15px;
        display: flex;
        justify-content: space-between;
        .title-area {
          width: 165px;
          h1,
          p {
            margin: 0px;
          }
        }
        .play-area {
          position: relative;
          .control-tick {
            .tick {
              transform: rotate(-20deg);
              position: absolute;
              top: -184px;
              left: -201px;
              width: 200px;
            }
            .active {
              transform: rotate(10deg);
              top: -220px;
              left: -153px;
            }
          }
          .control-tick:before {
            border: 3px solid #000;
            content: "";
            position: absolute;
            display: block;
            width: 58px;
            height: 58px;
            top: 4px;
            left: -39px;
            border-radius: 100%;
            background-color: #c5c5c5;
          }
          .active:before {
            top: 6px;
          }
          .btn-play {
            cursor: pointer;
            position: absolute;
            width: 35px;
            height: 35px;
            top: 13px;
            left: -26px;
          }
        }
        .vol-slider-area {
          width: 145px;
          display: flex;
          justify-content: space-around;
          padding-top: 25px;
          .slider-container {
            width: 95px;
            .slider {
              border: 3px solid #000;
              box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
              background-color: #fff;
              appearance: none;
              width: 100%;
              height: 6px;
              border-radius: 100px;
              background-color: #fff;
              outline: none;
              transition: background-color 0.2s;
            }
            .slider:hover {
              background-color: #c5c5c5;
            }
            input[type="range"]::-webkit-slider-thumb {
              -webkit-appearance: none;
              border: 3px solid #000;
              height: 30px;
              width: 15px;
              //border-radius: 8px;
              background: #fff;
              cursor: pointer;
            }
          }
          .sound {
            width: 20px;
            height: 20px;
          }
        }
      }
      .music-tick-area {
        padding: 0 15px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        .slider-container {
          width: 300px;
          .music-slider {
            width: 100%;
            border: 3px solid #000;
            box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
            background-color: #fff;
            appearance: none;
            height: 6px;
            border-radius: 100px;
            background-color: #fff;
            outline: none;
            transition: background-color 0.2s;
          }
          .music-slider:hover {
            background-color: #c5c5c5;
          }
          input[type="range"]::-webkit-slider-thumb {
            -webkit-appearance: none;
            border: 3px solid #000;
            height: 30px;
            width: 15px;
            //border-radius: 8px;
            background: #fff;
            cursor: pointer;
          }
        }
      }
    }
    .player:before {
      width: 20px;
      //   height: 45vh;
      min-height: 500px;
      right: -26px;
      top: -5px;
      transform: skewY(45deg);
    }
    .player:after {
      //   width: 45vw;
      min-width: 450px;
      height: 20px;
      bottom: -26px;
      left: -4px;
      transform: skewX(45deg);
    }
    .player:before,
    .player:after {
      content: "";
      position: absolute;
      border: 3px solid #000;
      background-color: #c5c5c5;
      display: block;
      transform-origin: top left;
      border-radius: 4px;
    }
    .play-list {
      border: 3px solid #000;
      background-color: #fff;
      position: absolute;
      top: 0px;
      left: 0px;
      width: 450px;
      height: calc(100vh - 4vh);
      transition: transform 0.5s, -webkit-transform 0.5s;
      .menu {
        box-sizing: border-box;
        width: 128px;
        height: 100%;
        padding: 35px 15px 0 15px;
        .play-list-search {
          display: flex;
          border: 1px solid #000;
          background-color: #dfdfdf;
          input {
            background-color: transparent;
            border: none;
            outline: none;
            cursor: pointer;
            width: 100%;
          }
          button {
            background-color: transparent;
            border: none;
            outline: none;
            cursor: pointer;
          }
        }
        .option {
          margin: 7px 0;
          cursor: pointer;
          h4 {
            border-bottom: 1px solid #000;
          }
        }
      }
      .list-content {
        border: 3px solid #000;
        background-color: #fff;
        position: absolute;
        top: 16px;
        left: 128px;
        width: 330px;
        height: calc(100vh - 5vh);
        .list-title {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 75px;
          padding: 10px;
          h2 {
            margin: 0px;
          }
          .play-list-switch-btn {
            cursor: pointer;
            display: flex;
            flex-direction: column;
            span {
              font-size: 20px;
              font-weight: 600;
            }
            i {
              font-size: 36px;
              font-weight: 600;
            }
          }
        }
        .list-item-area {
          width: 100%;
          height: 400px;
          box-sizing: border-box;
          margin-top: 20px;
          padding: 0 25px;
          overflow-y: auto;
          .item:first-child {
            border-top: 3px solid #000;
          }
          .item {
            font-size: 18px;
            height: 75px;
            padding: 0 10px;
            border-bottom: 3px solid #000;
            display: flex;
            justify-content: space-between;
            .info-area {
              text-align: left;
              width: 50%;
              display: flex;
              flex-direction: column;
              justify-content: space-around;
              h3 {
                margin: 0px;
              }
            }
            .album-time-area {
              text-overflow: ellipsis;
              display: flex;
              flex-direction: column;
              justify-content: space-around;
              text-align: right;
              width: 50%;
            }
          }
          .item:hover {
            background-color: #c5c5c5;
          }
        }
        .picture {
          background-color: #000;
          width: 100%;
          height: 140px;
          img {
            position: absolute;
            width: 150px;
            height: 133px;
            bottom: 3px;
            left: 90px;
          }
        }
      }
    }
  }
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: white;
    border: 3px solid #646464;
    border-radius: 100px;
  }

  ::-webkit-scrollbar-thumb {
    background: #646464;
    border: 3px solid #646464;
    border-radius: 100px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: darken(#646464, 10%);
  }
  .show-menu {
    transform: translateX(50%);
  }
  .hide {
    transform: translateX(-100%) rotate(25deg);
  }
}
</style>
