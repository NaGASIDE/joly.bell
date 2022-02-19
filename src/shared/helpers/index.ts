export interface IHeaderMenuItem {
    type: string,
    showName: string
}

export interface ILanguage {
    id: number,
    title: string,
    showTitle: string,
}

export const headerMenuItems = [
    {type: 't-shirts', showName: 'ФУТБОЛКИ'},
    {type: 'sweatshirts', showName: 'СВИТШОТЫ'},
    {type: 'hoodie', showName: 'ХУДИ'},
    {type: 'polo', showName: 'ПОЛО'},
    {type: 'pants/shorts', showName: 'ШТАНЫ/ШОРТЫ'},
    {type: 'shirts', showName: 'РУБАШКИ'},
    {type: 'caps', showName: 'КЕПКИ'},
    {type: 'hats', showName: 'ШАПКИ'},
    {type: 'underpants', showName: 'ТРУСЫ'},
    {type: 'backpacks', showName: 'РЮКЗАКИ'},
    {type: 'souvenirs', showName: 'СУВЕНИРЫ'},
    {type: 'memes', showName: 'МЕМЫ'},
    {type: 'faq', showName: 'FAQ'},
    {type: 'order-status', showName: 'СТАТУС ЗАКАЗА'},
]

export const languages = [
    {id: 1, title: `rus`, showTitle: `РУС` },
    {id: 2, title: `eng`, showTitle: `АНГ` },
    {id: 3, title: `ukr`, showTitle: `УКР` }
];