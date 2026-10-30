// Erstatter temaets kopiér-knap: danske tekster og Clipboard API
require(["gitbook", "jquery"], function (gitbook, $) {
    gitbook.events.bind("page.change", function () {
        $("pre").each(function () {
            var $pre = $(this);
            if ($pre.children(".copy-code-button").length) return;
            $pre.css("position", "relative");

            var $button = $("<button type='button' class='copy-code-button'>Kopiér</button>");
            $button.click(function () {
                var text = $pre.children("code").text().replace(/\n$/, "");
                navigator.clipboard.writeText(text).then(function () {
                    $button.text("Kopieret");
                }, function () {
                    $button.text("Kunne ikke kopiere");
                });
                setTimeout(function () { $button.text("Kopiér"); }, 2000);
            });
            $pre.append($button);
        });
    });
});
