it('login app action',()=>{
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
   cy.window().then(({ app }) => {
    console.log('i am here:', app);
    if (app.loggedIn) {
        app.loggedIn.active = true;
    } else {
        console.error('loggedIn is undefined');
    }
});

})