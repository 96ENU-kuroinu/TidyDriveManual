/**
 * data-image属性に基づいてすべてのspan要素のテキスト内容を更新する関数
 */
function updateSpanText() {
    // Select all span elements with the class 'hover-text'
    const spanElements = document.querySelectorAll('.hover-text');

    // Loop through each span element and update its text content
    spanElements.forEach(spanElement => {
        // Get the data-image attribute value for the current span element
        const dataImage = spanElement.getAttribute('data-image');

        // Conditional logic to change text based on the data-image value
        let newText = '';
        switch (dataImage) {
            case 'images/display-initial.png':
                newText = '初回起動時に表示されるウィンドウ';
                break;
            case 'images/display-select-server.png':
                newText = 'サーバー一覧画面';
                break;
            case 'images/display-select-alternative-server.png':
                newText = 'サーバー一覧に掲載されていないサーバーの選択用ウィンドウ';
                break;
            case 'images/display-setting.png':
            case 'images/display-setting-no-auth.png':
                newText = '設定画面';
                break;
            case 'images/display-main.png':
                newText = 'ホーム画面';
                break;
            case 'images/display-drawer.png':
                newText = 'ドロワー';
                break;
            case 'images/display-app-about.png':
                newText = 'アプリについての画面';
                break;
            case 'images/display-tag-manage.png':
                newText = 'タグ管理画面';
                break;
            default:
                newText = '対応する画面名が定義されていません！'
                break;
        }

        // Update the text content of the current span element
        spanElement.textContent = newText;
    });
}

// Call the function to update the span texts on page load
window.onload = updateSpanText;