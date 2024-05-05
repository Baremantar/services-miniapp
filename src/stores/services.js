import {defineStore} from 'pinia'

export const useServices = defineStore('services', () => {
    const services = [
        {
            title: 'Вызвать официанта',
            link: '/call-waiter/'
        },
    ];

    const webhookUrl = 'https://webhook.site/9bee7631-e4df-4632-91f1-d80783bd1700';


    return { services, webhookUrl };
})
