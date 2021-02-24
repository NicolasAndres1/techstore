export const MENU_ROUTES = [
    {
        title: 'Home',
        link: 'home'
    },
    {
        title: 'Computer Systems',
        link: 'computer-systems',
        subCategories: [
            {
                title: 'Desktops',
                link: 'desktops',
                subCategories: [ 'Desktop Computers', 'Gaming Desktops', 'All-in-one Computers', 'Chromebox Desktops & Mini PCs', 'Business Desktop' ]
            },
            {
                title: 'Laptops / Notebooks',
                link: 'laptops-notebooks',
                subCategories: [ 'Laptops / Notebooks', '2-in-1 Laptops', 'Chromebooks', 'Mobile Workstation', 'Touchscreen Systems', 'Microsoft Surface' ]
            },
            {
                title: 'Gaming Laptops',
                link: 'gaming-laptops',
                subCategories: [ 'Gaming Laptops', '10th Gen Intel Gaming Laptops', '9th Gen Intel Gaming Laptops', 'AMD Ryzen Gaming Laptops', 'GeForce RTX Serier', 'GeForce GTX Series']
            },
            {
                title: 'Peripherals',
                link: 'peripherals',
                subCategories: [ 'Monitors' ]
            }
        ]
    },
    {
        title: 'Components',
        link: 'components',
        subCategories: [
            {
                title: 'Core Components',
                link: 'core-components',
                subCategories: [ 'CPUs / Processors', 'Memory', 'Motherboards', 'Video Cards & Video Devices' ]
            }
        ]
    }
]