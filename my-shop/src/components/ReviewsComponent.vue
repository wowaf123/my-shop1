<template>
  <table>
    <thead>
      <tr>
        <th>Ім'я</th>
        <th>Рейтинг</th>
        <th>Коментар</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(review) in reviews" :key="review.Name">
        <td>{{ review.Name }}</td>
        <td>{{ review.Rating }}</td>
        <td>{{ review.Comment }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import Papa from 'papaparse';
export default {
data: function(){
    return {
        reviews: []
    }
},
created() {
    let content =`Name,Rating,Comment
    Іван,5,Дякую за швидку доставку
    Ольга,5,Все супер! Буду замовляти ще
    Андрій,5,Обслуговування, як завжди - на висоті
    Марина,4,Все чудово! Покупкою задоволена, але коробка була прим'ята.
    Сергій,5,Рекомендую цей чудовий магазин усім!
    Данило,5,Дуже демократичні ціни. Я завжди купую лише тут.
    Матвій,5,Дякую за подарунок до покупки - завжди радуєте приємними сюрпризами.
    Анна,5,Дякую за чудові знижки
    Раймонд,4,Як завжди все кльово, але малий термін гарантії для годинника, хотілося б довше.`;
    Papa.parse(content.trim(), {
        header: true,
        complete: (res) => {
            this.reviews = res.data;
        }
    });
}
}
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: var(--shadow-lg);
  animation: slideIn 0.4s ease-out;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

thead {
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-light) 100%);
}

th {
  color: white;
  padding: 16px;
  text-align: left;
  font-weight: 600;
  font-size: 0.95rem;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}

tbody tr {
  border-bottom: 1px solid var(--neutral-200);
  transition: var(--transition);
}

tbody tr:last-child {
  border-bottom: none;
}

tbody tr:hover {
  background: linear-gradient(90deg, rgba(37, 99, 235, 0.05) 0%, transparent 100%);
}

td {
  padding: 14px 16px;
  color: var(--neutral-700);
  font-size: 0.95rem;
  line-height: 1.5;
}

tbody tr:nth-child(odd) {
  background: var(--neutral-50);
}
</style>