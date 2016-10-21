const data = {
    id: 1,
    name: 'First Ticket!',
    priority: 5,
    project_id: 1,
    project_name: 'Build Ticketing System',
    assignees: ['Alex Ramsdell @foundling'],
    assigned: new Date(),
    due: new Date((new Date()).setDate((new Date()).getDate() + 14)),
    stage: 0,
    open: true
}

process.stdout.write(JSON.stringify(data));
