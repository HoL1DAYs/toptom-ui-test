<script setup lang="ts">
    import { defineProps } from 'vue'

    import type { ITimelineProps } from '.'

    defineProps<ITimelineProps>()
</script> 

<template>
    
<div class="wrapper">
      <div class="info">
        <div class="info__discription">
            <h1>Timeline</h1>
            <p>Отображает графическую информацию о статусе заказа</p>
            <button>Сторибук <img src="/assets/svg/arrow-icon.svg" alt=""></button>
        </div>
        <div class="info__icons">
            <img src="/assets/svg/icon.svg" alt="иконка">
            <img src="/assets/svg/orange-icon.svg" alt="оранжевая иконка">
        </div>
      </div>
      <div class="timeline">
        <h2 class="timeline__title">
            {{ text }}
        </h2>
        <div ref="divRef" class="timeline__progress-bar progress-bar">
            <div class="progress-bar__step progress-bar__step--active ">
                <span ref="spanRef" class="progress-bar__dot progress-bar__dot--active"></span>
                <span class="progress-bar__label">Создан</span>
                <div class="timeline__description description description">
                    <div class="timeline__square"></div>
                    <div class="discription__text">
                        <p>Ожидает подтверждения администратором</p>
                    </div>
                </div>
                <div class="timeline__description description description">
                    <div class="timeline__square"></div>
                    <div class="discription__text">
                        <p>Ожидаем других участников группы</p>
                    </div>
                </div>
            </div>
            <div class="progress-bar__step progress-bar__step--active">
                <span class="progress-bar__dot progress-bar__dot--active" ></span>
                <span class="progress-bar__label">Оплачен</span>
                <div class="timeline__description description" :class="{active: mode === 'secondary'}">
                    <div class="timeline__square"></div>
                    <div class="discription__text">
                        <p>Оплата получена, ожидаем оплату от других участников группы</p>
                    </div>
                </div>
                <div class="timeline__description description">
                    <div class="timeline__square"></div>
                    <div class="discription__text">
                        <p>Ожидаем оплату от вас и других участников группы</p>
                    </div>
                </div>
                <div class="timeline__description description">
                    <div class="timeline__square"></div>
                    <div class="discription__text">
                        <p>Оплата получена от всех участников группы</p>
                    </div>
                </div>
            </div>
            <div class="progress-bar__step">
                <span class="progress-bar__dot"></span>
                <span class="progress-bar__label">Оплачен всеми</span>
            </div>
            <div class="progress-bar__step">
                <span class="progress-bar__dot"></span>
                <span class="progress-bar__label">Готовится к отправке</span>
                <div class="timeline__description description">
                    <div class="timeline__square"></div>
                    <div class="discription__text">
                        <p>Магазин готовит групповой заказ к отправке</p>
                    </div>
                </div>
            </div>
            <div class="progress-bar__step">
                <span class="progress-bar__dot"></span>
                <span class="progress-bar__label">Готов к отправке</span>
                <div class="timeline__description description">
                    <div class="timeline__square"></div>
                    <p>Ищем свободных курьеров</p>
                </div>
            </div>
            <div class="progress-bar__step">
                <span class="progress-bar__dot"></span>
                <span class="progress-bar__label">В пути</span>
                <div class="timeline__description description">
                    <div class="timeline__square"></div>
                    <p>Курьер скоро будет у вас</p>
                </div>
            </div>
            <div class="progress-bar__step">
                <span class="progress-bar__dot"></span>
                <span class="progress-bar__label">Доставлен</span>
                <div class="timeline__description description">
                    <div class="timeline__square"></div>
                    <p>Заказ был доставлен курьером</p>
                </div>
            </div>
        </div>


      </div>
      <div class="timeline">
        <h2 class="timeline__title">
            {{ text }}
        </h2>
        <div class="timeline__progress-bar progress-bar">
            <div class="progress-bar__step progress-bar__step--active">
                <span class="progress-bar__dot"></span>
                <span class="progress-bar__label">Создан</span>
            </div>
            <div class="progress-bar__step">
                <span class="progress-bar__dot"></span>
                <span class="progress-bar__label">Оплачен</span>
            </div>
            <div class="progress-bar__step">
                <span class="progress-bar__dot"></span>
                <span class="progress-bar__label">Оплачен всеми</span>
            </div>
            <div class="progress-bar__step">
                <span class="progress-bar__dot"></span>
                <span class="progress-bar__label">Готовится к отправке</span>
            </div>
            <div class="progress-bar__step">
                <span class="progress-bar__dot"></span>
                <span class="progress-bar__label">Готов к отправке</span>
            </div>
            <div class="progress-bar__step">
                <span class="progress-bar__dot"></span>
                <span class="progress-bar__label">В пути</span>
            </div>
            <div class="progress-bar__step">
                <span class="progress-bar__dot"></span>
                <span class="progress-bar__label">Доставлен</span>
            </div>
        </div>
        <div class="timeline__description description">
            <div class="timeline__square"></div>
            <p>Ожидает оплаты</p>
        </div>
        <div class="timeline__description description">
            <div class="timeline__square"></div>
            <p>Заказ передаётся в магазин</p>
        </div>
        <div class="timeline__description description">
            <div class="timeline__square"></div>
            <p>Магазин готовит заказ к отправке</p>
        </div>
        <div class="timeline__description description">
            <div class="timeline__square"></div>
            <p>Ищем свободных курьеров</p>
        </div>
        <div class="timeline__description description">
            <div class="timeline__square"></div>
            <p>Курьер скоро будет у вас</p>
        </div>
        <div class="timeline__description description">
            <div class="timeline__square"></div>
            <p>Заказ был доставлен курьером</p>
        </div>
      </div>
      <div class="timeline">
        <h2 class="timeline__title">
            {{ text }}
        </h2>
        <div class="timeline__progress-bar progress-bar">
            <div class="progress-bar__step progress-bar__step--active">
                <span class="progress-bar__dot"></span>
                <span class="progress-bar__label">Создан</span>
            </div>
            <div class="progress-bar__step">
                <span class="progress-bar__dot"></span>
                <span class="progress-bar__label">Оплачен</span>
            </div>
            <div class="progress-bar__step">
                <span class="progress-bar__dot"></span>
                <span class="progress-bar__label">Готовится к отправке</span>
            </div>
            <div class="progress-bar__step">
                <span class="progress-bar__dot"></span>
                <span class="progress-bar__label">Готов к отправке</span>
            </div>
            <div class="progress-bar__step">
                <span class="progress-bar__dot"></span>
                <span class="progress-bar__label">В пути</span>
            </div>
            <div class="progress-bar__step">
                <span class="progress-bar__dot"></span>
                <span class="progress-bar__label">Доставлен</span>
            </div>
        </div>
        <div class="timeline__description description">
            <div class="timeline__square"></div>
            <p>Ожидаем оплату и других покупателей</p>
        </div>
        <div class="timeline__description description">
            <div class="timeline__square"></div>
            <p>Оплата получена, ожидаем других покупателей</p>
        </div>
        <div class="timeline__description description">
            <div class="timeline__square"></div>
            <p>Оплата получена от всех покупателей</p>
        </div>
        <div class="timeline__description description">
            <div class="timeline__square"></div>
            <p>Магазин готовит заказ к отправке</p>
        </div>
        <div class="timeline__description description">
            <div class="timeline__square"></div>
            <p>Ищем свободных курьеров</p>
        </div>
        <div class="timeline__description description">
            <div class="timeline__square"></div>
            <p>Курьер скоро будет у вас</p>
        </div>
        <div class="timeline__description description">
            <div class="timeline__square"></div>
            <p>Заказ был доставлен курьером</p>
        </div>
      </div>
</div>
</template>

<style lang="scss" scoped>
@import url('./styles.scss');
</style>

