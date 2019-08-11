<template>
    <div class="w4-container">
        <div class="item-detail-container">
            <div class="item-detail">
                <h4>訂單資訊</h4>
                <div class="detail-row">
                    <div class="title">商品名稱：</div>
                    <div class="item-name">Iphone XR手機殼 x1</div>
                </div>
                <div class="detail-row">
                    <div class="title">訂單編號：</div>
                    <div class="item-name">17485739</div>
                </div>
                <div class="detail-row">
                    <div class="title">訂單金額：</div>
                    <div class="item-name">NT$ 600</div>
                </div>
            </div>
            <button class="return">返回商店
            </button>
        </div>
        <div class="main-container">
            <div class="progress-container">
                <div class="step-circle finish">1</div>
                <span class="dash-line ing"></span>
                <div class="step-circle">2</div>
                <span class="dash-line"></span>
                <div class="step-circle">3</div>
            </div>
            <div class="payment-container">
                <h2><span>STEP1. 選擇付款方式</span></h2>
                <div class="pay-solutions">
                    <div @click="nowSelectType=1" :class="{active:nowSelectType==1}" class="sol-block">
                        <img src="../../assets/online_payment/credit-card.svg" alt="">
                        <span>信用卡/金融卡</span>
                    </div>
                    <div @click="nowSelectType=2" :class="{active:nowSelectType==2}" class="sol-block">
                        <img src="../../assets/online_payment/unionpay.svg" alt="">
                        <span>銀聯卡</span>
                    </div>
                    <div @click="nowSelectType=3" :class="{active:nowSelectType==3}" class="sol-block">
                        <img src="../../assets/online_payment/shop.svg" alt="">
                        <span>超商付款</span>
                    </div>
                    <div @click="nowSelectType=4" :class="{active:nowSelectType==4}" class="sol-block">
                        <img src="../../assets/online_payment/web-atm.svg" alt="">
                        <span>Web ATM</span>
                    </div>
                    <div @click="nowSelectType=5" :class="{active:nowSelectType==5}" class="sol-block">
                        <img src="../../assets/online_payment/atm.svg" alt="">
                        <span>ATM 轉帳</span>
                    </div>
                </div>
                <div class="btn-container">
                    <div class="next">下一步</div>
                </div>
            </div>
        </div>
        <div class="footer"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            nowSelectType: 0
        }
    }
}
</script>


<style lang="scss" scoped>
.w4-container {
    height: 100%;
    display: flex;
    justify-content: center;
    font-family: NotoSansCJKtc-DemiLight;
    button:focus {
        outline: 0;
    }
    .item-detail-container {
        .item-detail {
            margin-top: 120px;
            width: 234px;
            height: 281px;
            background-color: #f3f3f3;
            padding: 24px 26px;
            box-sizing: border-box;
            border-radius: 5px;
            h4 {
                margin: 0px;
                letter-spacing: 3px;
            }
            .detail-row {
                font-size: 14px;
                letter-spacing: 2px;
                margin: 20px 0px;
                .title {
                    color: #5e5e5e;
                    margin: 5px 0px;
                }
            }
        }
        .return {
            user-select: none;
            background-color: #4b4b4b;
            border-radius: 5px;
            color: #fff;
            padding: 10px;
            margin-top: 30px;
            font-size: 14px;
            font-weight: 500;
            cursor: pointer;
        }
        .return:hover {
            background-color: #696969;
        }
    }
    .main-container {
        width: 55%;
        .progress-container {
            height: 120px;
            display: flex;
            justify-content: center;
            align-items: center;
            .step-circle {
                font-weight: 600;
                width: 25px;
                height: 25px;
                background-color: #afafaf;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 50%;
                color: #fff;
            }
            .dash-line {
                width: 8vw;
                border: 1px solid #d8d8d8;
            }
            .finish {
                background-color: #8defcb;
            }
            .ing {
                border-image: linear-gradient(to right, #b5ffe4 0%, #d8d8d8 100%);
                border-image-slice: 1;
            }
        }
        .payment-container {
            padding: 36px;
            height: calc(100% - 120px);
            text-align: center;
            box-shadow: 0px 2px 13px 0px rgba(0, 0, 0, 0.08);
            overflow-y: auto;
            background-color: #ffffff;
            box-sizing: border-box;
            h2 {
                margin: 0px;
                span {
                    background: linear-gradient(0deg, #b5ffe4 45%, #ffffff 55%);
                }
            }
            .pay-solutions {
                margin-top: 50px;
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                .sol-block {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    margin: 8px;
                    width: 130px;
                    height: 120px;
                    padding: 20px;
                    background-color: #f7f7f7;
                    font-weight: 500;
                    img {
                        width: 70px;
                        height: 70px;
                        margin-bottom: 10px;
                    }
                }
                .sol-block:hover {
                    background-color: #36b996;
                    color: #fff;
                }
                .active {
                    background-color: #36b996;
                    color: #fff;
                }
            }
            .btn-container {
                margin-top: 40px;
                padding: 20px 0px;
                display: flex;
                flex-direction: row-reverse;
                div {
                    background-color: #36b996;
                    border-radius: 5px;
                    color: #fff;
                    padding: 10px 25px;
                    font-size: 14px;
                    font-weight: 500;
                    cursor: pointer;
                }
                div:hover {
                    background-color: #8defcb;
                }
            }
        }
    }
    .footer {
        height: 20vh;
        width: 100%;
        position: absolute;
        bottom: 0px;
        z-index: -1;
        align-self: flex-end;
        background-color: #defff2;
        background-image: url('../../assets/online_payment/footer-background.svg');
    }
}
</style>
