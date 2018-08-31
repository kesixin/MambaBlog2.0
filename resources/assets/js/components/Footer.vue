<template>
    <div class="footer-bar">
        <h4>底部栏</h4>
    </div>
</template>

<script>
    export default{

    }
</script>

<style scoped>
    .footer-bar{
        margin-top: 64px;
        padding-top: 40px;
        padding-bottom: 40px;
        border-bottom: none;
        background: #1B1C1D;
        color: rgba(255, 255, 255, 0.9);
        border: none;
        box-shadow: none;
        max-height: 340px;
        -webkit-box-flex: 1;
        margin: 0em;
        padding-left: 0em;
        padding-right: 0em;
    }
    .ui.grid {
        width:100%;
        margin-top: -1rem;
        margin-bottom: -1rem;
        margin-left: -1rem;
        margin-right: -1rem;
    }
    .ui.grid {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        -ms-flex-direction: row;
        flex-direction: row;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        -webkit-box-align: stretch;
        -ms-flex-align: stretch;
        align-items: stretch;
        padding: 0em;
    }
    .ui.inverted.divided.grid:not([class*="vertically divided"]) > .column:not(.row):first-child, .ui.inverted.divided.grid:not([class*="vertically divided"]) > .row > .column:first-child {
        -webkit-box-shadow: none;
        box-shadow: none;
    }
    .ui.inverted.header {
        color: #FFFFFF;
    }
    .ui.header:first-child {
        margin-top: -0.14285em;
    }
    h4.ui.header {
        font-size: 1.071rem;
    }
    .ui.header {
        border: none;
        margin: calc(2rem - 0.14285em) 0em 1rem;
        padding: 0em 0em;
        font-family: 'Lato', 'Helvetica Neue', Arial, Helvetica, sans-serif;
        font-weight: bold;
        line-height: 1.2857em;
        text-transform: none;
        color: rgba(0, 0, 0, 0.87);
    }
    ul.ui.link:last-child, ol.ui.link:last-child, .ui.link:last-child {
        margin-bottom: 0em;
        padding-bottom: 0em;
    }
    .ui.link {
        font-size: 1em;
    }
    ul.ui.link, ol.ui.link, .ui.link {
        list-style-type: none;
        margin: 1em 0em;
        padding: 0em 0em;
    }
    .ui.inverted.link .item, .ui.inverted.link a.item, .ui.inverted.link .item a:not(.ui) {
        color: rgba(255, 255, 255, 0.5);
        line-height: 22px;
        padding-top: 0em;
        transition: 0.1s color ease;
        cursor: pointer;
    }
    ul.ui.link li, ol.ui.link li, .ui.link > .item, .ui.link .link > .item {
        display: list-item;
        table-layout: fixed;
        list-style-type: none;
        list-style-position: outside;
        padding: 0.21428571em 0em;
        line-height: 1.14285714em;
    }
    .ui.grid > .row > [class*="four wide"].column, .ui.grid > .column.row > [class*="four wide"].column, .ui.grid > [class*="four wide"].column, .ui.column.grid > [class*="four wide"].column {
        width: 30% !important;
    }
    .ui.inverted.divided.grid:not([class*="vertically divided"]) > .column:not(.row):first-child, .ui.inverted.divided.grid:not([class*="vertically divided"]) > .row > .column:first-child {
        -webkit-box-shadow: none;
        box-shadow: none;
    }
    .ui.grid > .column:not(.row) {
        padding-top: 1rem;
        padding-bottom: 1rem;
    }
    .ui.grid > .column:not(.row), .ui.grid > .row > .column {
        position: relative;
        display: inline-block;
        width: 6.25%;
        padding-left: 1rem;
        padding-right: 1rem;
        vertical-align: top;
    }
    .ui.inverted.divided.grid:not([class*="vertically divided"]) > .column:not(.row), .ui.inverted.divided.grid:not([class*="vertically divided"]) > .row > .column {
        -webkit-box-shadow: -1px 0px 0px 0px rgba(255, 255, 255, 0.1);
        box-shadow: -1px 0px 0px 0px rgba(255, 255, 255, 0.1);
    }
    .ui.grid > .row > [class*="eight wide"].column, .ui.grid > .column.row > [class*="eight wide"].column, .ui.grid > [class*="eight wide"].column, .ui.column.grid > [class*="eight wide"].column {
        width: 40% !important;
    }
    .web-description{
        font-size: 0.9em;
        margin-top: 20px;
        margin-bottom: -8px;
        color: rgb(137, 137, 140);
        line-height: 25px;
    }
</style>