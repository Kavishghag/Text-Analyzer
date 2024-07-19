function analyzeFile() {
    const fileInput = document.getElementById('fileInput');
    const fileInfoDiv = document.getElementById('fileInfo');
    const resultDiv = document.getElementById('result');

    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.onload = function(event) {
        const content = event.target.result;
        const wordCount = content.split(/\s+/).length;
        const characterCount = content.length;
        const lineCount = content.split(/\r\n|\r|\n/).length;

        fileInfoDiv.innerHTML = `
            <p><strong>File Name:</strong> ${file.name}</p>
            <p><strong>File Size:</strong> ${formatBytes(file.size)}</p>
            <p><strong>Word Count:</strong> ${wordCount}</p>
            <p><strong>Character Count:</strong> ${characterCount}</p>
            <p><strong>Line Count:</strong> ${lineCount}</p>
        `;
        resultDiv.innerHTML = `<pre>${content}</pre>`;
    }

    reader.readAsText(file);
}

function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}
