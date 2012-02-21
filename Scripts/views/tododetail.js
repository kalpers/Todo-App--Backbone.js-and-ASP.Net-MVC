define([
    'jquery',
    'underscore',
    'backbone',
    'jqueryui',
    'text!templates/tododetail.htm'
    ], function ($, _, Backbone, ui, todoDetailview) {
        var detailview = Backbone.View.extend({
            el: $("#todo-detail"),

            events: {
                "click .clickable": "closeDetail"
            },

            initialize: function () {
                _.bindAll(this, 'render', 'closeDetail');
            },

            detailTemplate: _.template(todoDetailview),

            closeDetail: function () {
                this.model = null;
            },

            render: function () {
                $(this.el).html(this.detailTemplate(this.model.toJSON())).dialog({
                    title: "Todo Detail",
                    modal: true,
                    buttons: [
                        { text: "OK",
                            click: function () {
                                $(this).find(".clickable").trigger("click");
                                $(this).dialog("close");
                            }
                        }]
                }).draggable();
                return this;
            }
        });
        return detailview;
    });