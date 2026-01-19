<script setup>
import VueApexCharts from 'vue3-apexcharts';
import { ref, computed } from 'vue';

const ma = ref(10)
const sv = ref(9)
const eng = ref(8)
const his = ref(9)
const sam = ref(9)
const fy = ref(9)
const ke = ref(9)
const bk = ref(10)
const mu = ref(9)
const ge = ref(9)
const bi = ref(9)
const idr = ref(8)
const hak = ref(9)
const hem = ref(9)
const sy = ref(9)
const tra = ref(8)
const lire = ref(9)


const chartOptions = ref({
    labels: ["Matte", "Svenska", "Engelska", "Historia", "Samhällskunskap", "Fysik", "Kemi", "Bildkonst", "Musik", "Geografi", "Biologi", "Idrott", "Hälsokunskap", "Hemkunskap", "Syslöjd", "Träslöjd", "Livsåskådning/Religion"]
})

//vibe-codad
const series = computed(() => [{
    name: "Grades",
    data: [ma.value, sv.value, eng.value, his.value, sam.value, fy.value, ke.value, bk.value, mu.value, ge.value, bi.value, idr.value, hak.value, hem.value, sy.value, tra.value, lire.value] // Access the value with .value
}]);
</script>
<template>
    <VueApexCharts
    width="300px"
    height="300px"
        type = "radar"
        :series="series"
        :options="chartOptions"
    />

    Matte<select v-model="ma">
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
    </select>
    <br>
    Svenska<select v-model="sv">
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
    </select>
    <br>
    Engelska<select v-model="eng">
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
    </select>
    <br>
    Historia<select v-model="his">
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
    </select>
    <br>
    Samhällskunskap<select v-model="sam">
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
    </select>
    <br>
    Fysik<select v-model="fy">
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
    </select>
    <br>
    Kemi<select v-model="ke">
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
    </select>
    <br>
    Bildkonst<select v-model="bk">
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
    </select>
    <br>
    Musik<select v-model="mu">
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
    </select>
    <br>
    Geografi<select v-model="ge">
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
    </select>
    <br>
    Biologi<select v-model="bi">
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
    </select>
    <br>
    Idrott<select v-model="idr">
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
    </select>
    <br>
    Hälsokunskap<select v-model="hak">
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
    </select>
    <br>
    Hemkunskap<select v-model="hem">
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
    </select>
    <br>
    Syslöjd<select v-model="sy">
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
    </select>
    <br>
    Träslöjd<select v-model="tra">
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
    </select>
    <br>
    Religion/Livsåskådning<select v-model="lire">
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
    </select>
    <br>
</template>

