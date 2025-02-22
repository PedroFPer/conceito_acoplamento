package org.pedro.composicao;

public class PeixeComp extends AnimalComp {
    private ComportNadarComp nadar;

    public PeixeComp(String nome) {
        super(nome);

        nadar = new ComportNadarComp();
    }

    public void nadar(){
        this.nadar.nadar();
    }
}
