describe('Home Page Load',()=>{
    it('should load the home page',()=>{
        cy.visit('https://example.com');
        cy.contains('Example Domain');

    });
});