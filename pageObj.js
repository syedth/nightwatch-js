module.exports = {
    pages: {
        login: {
            email_input: {
                selector: '#email'
            },
            password_input: {
                selector: '#password'
            },
        },
        cloudmaxis_product: {
            our_products_text: {
                selector: 'div.dashboard-container.display-flex.align-center > div > h2.t-24-32-600-p.text-center.m-b-16'
            },
            maxis_bot_section: {
                selector: 'div.product-summary.p-24.display-flex.border-radius-xlarge.maxisbot.m-b-16.cursor-pointer > div.m-l-16.flex-1 > h2'
            },
            maxis_crm_section: {
                selector: 'div.product-summary.p-24.display-flex.border-radius-xlarge.maxiscrm.cursor-pointer > div.m-l-16.flex-1 > h2'
            },
        },
        dashboard: {
            dasboard_header_text: {
                selector: ' .crm-details-panel > div.crm-header > div > div > h5'
            }
        },
        side_nav: {
            contacts_menu: {
                selector: 'div.crm-sidenav-panel > div.flex-1 > div.d-flex.flex-column.navigation-menu > div.position-relative.m-b-2 > a'
            },
            contacts: {
                selector: 'div.flex-1 > div.d-flex.flex-column.navigation-menu > div.position-relative.m-b-2 > a > div > div > div.sub-menu-list-item.border-radius-medium.border-grey.p-1 > div:nth-child(2)'
            }
        },
        contacts: {
            contacts_header_text: {
                selector: 'div.crm-header > div > div > h5'
            }
        }
    }
};