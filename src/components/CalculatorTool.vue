<template>
    <div>
        <div class="calculator">
            <input v-model="data.input" type="text" class="calculator-input" readonly />
            <div class="button-row">
                <button @click="appendToInput('1')">1</button>
                <button @click="appendToInput('2')">2</button>
                <button @click="appendToInput('3')">3</button>
                <button @click="appendToInput('+')">+</button>
            </div>
            <div class="button-row">
                <button @click="appendToInput('4')">4</button>
                <button @click="appendToInput('5')">5</button>
                <button @click="appendToInput('6')">6</button>
                <button @click="appendToInput('-')">-</button>
            </div>
            <div class="button-row">
                <button @click="appendToInput('7')">7</button>
                <button @click="appendToInput('8')">8</button>
                <button @click="appendToInput('9')">9</button>
                <button @click="appendToInput('*')">*</button>
            </div>
            <div class="button-row">
                <button @click="appendToInput('0')">0</button>
                <button @click="calculate()">=</button>
                <button @click="clearInput()">C</button>
                <button @click="appendToInput('/')">/</button>
            </div>
        </div>
    </div>
</template>
  
<!-- <script setup lang="ts">
import { ref } from 'vue';

const data = ref({
    input: '',
});

const appendToInput = (value: string) => {
    data.value.input += value;
};

const calculate = () => {
    try {
        const result = new Function('return ' + data.value.input)();
        data.value.input = result.toString();
    } catch (error) {
        data.value.input = 'Error';
    }
};

const clearInput = () => {
    data.value.input = '';
};

</script> -->

<script lang="ts">
import { ref, Ref } from 'vue';

interface CalculatorData {
    input: string;
}

const data: Ref<CalculatorData> = ref({
    input: '',
});

const appendToInput = (value: string) => {
    data.value.input += value;
};

const calculate = () => {
    try {
        const result = new Function('return ' + data.value.input)();
        data.value.input = result.toString();
    } catch (error) {
        data.value.input = 'Error';
    }
};

const clearInput = () => {
    data.value.input = '';
};

export { appendToInput, calculate };
</script>
  
<style scoped lang="scss">
.calculator {
    // background: #f4f4f4;
    // border: 2px solid #ccc;
    border-radius: 10px;
    padding: 10px;
    width: 300px;
    margin: auto;
    // box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.calculator-input {
    width: 100%;
    padding: 10px;
    font-size: 20px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    text-align: right;
}

.button-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;

    button {
        flex: 1;
        padding: 15px;
        font-size: 18px;
        margin-left: 3px;
        margin-right: 3px;
        cursor: pointer;
        border: 1px solid #ccc;
        border-radius: 5px;
        background: #fff;
        // box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

        &:active {
            transform: translateY(2px);
        }
    }
}
</style>