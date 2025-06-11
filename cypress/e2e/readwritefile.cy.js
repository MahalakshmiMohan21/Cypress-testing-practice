before(function(){
    cy.fixture('example.json').as('test_data')
})

it('Read files using fixture',function(){
    cy.fixture('example.json').then((data)=>{
        cy.log(data.name)
        cy.log(data.email)
    })
    cy.log(this.test_data.name)
})

it('write files using fixture',function(){
    cy.writeFile('sample.txt','hello,I am maha\n')
    cy.writeFile('sample.txt','i am learning cypress',{flag:'a+'})

})