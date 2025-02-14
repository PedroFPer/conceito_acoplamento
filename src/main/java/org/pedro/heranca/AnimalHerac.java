package org.pedro.heranca;

public class AnimalHerac {
    private String nome;

    public AnimalHerac(String nome) {
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public void andar(){
        System.out.println("Andando");
    }

    public void nadar(){
        System.out.println("Nadando");
    }
}
