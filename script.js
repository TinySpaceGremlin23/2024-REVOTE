// Save Report Locally
function saveReport() {
    const description = document.getElementById('description').value;
    const evidenceFiles = document.getElementById('evidence').files;
    const evidenceNames = [];

    // Collect names of all selected files
    for (let i = 0; i < evidenceFiles.length; i++) {
        evidenceNames.push(evidenceFiles[i].name);
    }

    const report = { description, evidence: evidenceNames.length > 0 ? evidenceNames : ['No files attached'] };
    localStorage.setItem('report', JSON.stringify(report));
    alert('Your report has been saved locally.');
}

// Export Report as JSON
function exportReports() {
    const description = document.getElementById('description').value;
    const evidenceFiles = document.getElementById('evidence').files;
    const evidenceNames = [];

    // Collect names of all selected files
    for (let i = 0; i < evidenceFiles.length; i++) {
        evidenceNames.push(evidenceFiles[i].name);
    }

    const report = { description, evidence: evidenceNames.length > 0 ? evidenceNames : ['No files attached'] };
    const reportBlob = new Blob([JSON.stringify(report)], { type: 'application/json' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(reportBlob);
    link.download = 'report.json';
    link.click();
}

// Print Report (Save as PDF)
function printReport() {
    const reportContent = document.getElementById('reportForm').innerHTML;
    const newWindow = window.open('', '', 'width=800, height=600');
    newWindow.document.write(`<html><body>${reportContent}</body></html>`);
    newWindow.document.close();
    newWindow.print();
}

// Export as Plain Text
function exportAsText() {
    const description = document.getElementById('description').value;
    const evidenceFiles = document.getElementById('evidence').files;
    const evidenceNames = [];

    // Collect names of all selected files
    for (let i = 0; i < evidenceFiles.length; i++) {
        evidenceNames.push(evidenceFiles[i].name);
    }

    const reportText = `Description: ${description}\nEvidence: ${evidenceNames.length > 0 ? evidenceNames.join(', ') : 'No files attached'}`;
    const reportBlob = new Blob([reportText], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(reportBlob);
    link.download = 'report.txt';
    link.click();
}

// Generate Email to White House
function emailReport() {
    const description = document.getElementById('description').value;
    const evidenceFiles = document.getElementById('evidence').files;
    const evidenceNames = [];

    // Collect names of all selected files
    for (let i = 0; i < evidenceFiles.length; i++) {
        evidenceNames.push(evidenceFiles[i].name);
    }

    const subject = 'Election Fraud Report';
    const body = `Description: ${description}\nEvidence: ${evidenceNames.length > 0 ? evidenceNames.join(', ') : 'No files attached'}`;
    
    window.location.href = `mailto:contact@whitehouse.gov?subject=${subject}&body=${body}`;
}
