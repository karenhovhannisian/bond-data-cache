# bond-data-cache

Complexity of algorithm is O(n*m).

Task:
Дана функция, которая получает из API данные о финансовых показателях облигаций за заданную дату по массиву идентификаторов облигаций (ISIN):
const getBondsData = async ({date, isins}) => {
  const result = await http.post({
    url: `/bonds/${date}`,
    body: isins
  });
  return result;
};
Пример вызова функции:
getBondsData({
  date: '20180120',
  isins: ['XS0971721963', 'RU000A0JU4L3']
});
Результат:
[{
  isin: 'XS0971721963',
  data: {...}
}, {
  isin: 'RU000A0JU4L3',
  data: {...}
}]
Задача
Изменить код функции, реализовав кэш на стороне клиента.
