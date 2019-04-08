var timeout = 10;
var countdownTimer = 10;

$(document).ready(function () {
    BindTimer();
});

function BindTimer() {
    $(document).bind("idle.idleTimer", function () {

        $.timeoutDialog({ timeout: timeout, countdown: countdownTimer, logout_redirect_url: 'AutoLogout.aspx', restart_on_yes: true });

    });

    $.idleTimer(timeout * 1000);
}