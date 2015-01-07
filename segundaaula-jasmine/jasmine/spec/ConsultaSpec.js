describe("Consulta", function(){

    var guilherme;

    beforeEach(function(){
        guilherme = new PacienteBuilder().constroi();
    });

    describe("Consultas do tipo retorno", function(){
        it("não deve cobrar nada se for um retorno", function(){


            var consulta = new Consulta(guilherme, [], true, true);

            expect(consulta.preco()).toEqual(0);

        });
    });


    describe("Consultas com procedimentos", function(){
        it("deve cobrar 25 por cada procedimento comum", function(){

            var guilherme = new Paciente("Guilherme", 28, 72, 1.80);
            var consulta = new Consulta(guilherme, ["proc1", "proc2"], false, false);

            expect(consulta.preco()).toEqual(50);

        });

        it("deve cobrar preço especifico dependendo do procedimento", function(){

            var guilherme = new Paciente("Guilherme", 28, 72, 1.80);
            var consulta = new Consulta(guilherme, ["procedimento-comum", "raio-x", "procedimento-comum", "gesso"], false, false);

            expect(consulta.preco()).toEqual(25 + 55 + 25 + 32);
        });
    });



});