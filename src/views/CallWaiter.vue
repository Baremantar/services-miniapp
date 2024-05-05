<script setup>
import {IMaskComponent} from "vue-imask";
import {ref} from "vue";
import axios from "axios";
import {useServices} from '@/stores/services';

// webhook url

const store = useServices();

// models

const name = defineModel('name');
const phone = defineModel('phone');
const location = defineModel('location');
const comment = defineModel('comment');

// form

const form = ref()
const formData = new FormData();
const onSubmit = (e) => {
  e.preventDefault()

  const data = {
    name: name.value,
    phone: phone.value,
    location: location.value,
    comment: comment.value,
  }

  Object.keys(data).forEach(key => {
    formData.append(key, data[key]);
  });

  axios.post(store.webhookUrl, formData)
      .then(response => alert('sucess!'))
      .catch(error => alert(error))

}
</script>

<template>
  <main>

    <h1>Вызов<br/>официанта</h1>

    <form @submit="onSubmit" ref="form">
      <label for="name">
        <span>Имя</span>
        <input type="text" required v-model="name" name="name" placeholder="Константинов Константин"/>
      </label>
      <label for="phone">
        <span>Телефон</span>
        <IMaskComponent v-model:unmasked="phone" required :mask="'+{7} (000) 000-00-00'"
                        placeholder="+7 (...) ...-..-.."/>
      </label>
      <label for="location">
        <span>Локация</span>
        <input type="text" required v-model="location" name="location" placeholder="Piazetta"/>
      </label>
      <label for="comment">
        <span>Комментарий</span>
        <textarea name="comment" required v-model="comment" cols="30" rows="3"
                  placeholder="Введите текст сообщения..."></textarea>
      </label>
      <input type="submit" value="Вызвать">
    </form>

  </main>
</template>

<style scoped lang="scss">
h1 {
  font-size: 32px;
  line-height: 39px;
  color: white;
  text-transform: uppercase;
  text-align: center;
}

form {
  display: flex;
  flex-direction: column;
  gap: 12px;

  label {
    display: flex;
    flex-direction: column;
    gap: 5px;
    color: #F4F1ED;
    border-bottom: 1px solid #F4F1ED33;

    span {
      font-size: 16px;
      color: #F4F1ED33;
    }

  }

  input, textarea {
    font-family: "Journal Sans New";
    background: unset;
    opacity: 1;
    border: unset;
    font-size: 18px;
    outline: none;
    color: #F4F1ED;

    &::placeholder {
      color: #F4F1ED;
    }

    &[type="submit"] {
      background: #E7BDA6;
      border-radius: 20px;
      padding: 17px 10px;
      color: #415263;
      cursor: pointer;
      transition: all .3s ease;

      &:hover {
        background: white;
        color: #2c3e50;

      }
    }
  }
}
</style>