db.createUser({
    user: 'testus',
    pwd: 'testpass',
    roles: [
        {
            role: 'readWrite',
            db: 'laravel'
        }
    ]
});
