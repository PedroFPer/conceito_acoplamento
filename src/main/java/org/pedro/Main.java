package org.pedro;

import org.pedro.composicao.CachorroComp;
import org.pedro.composicao.PeixeComp;
import org.pedro.heranca.CachorroHerac;
import org.pedro.heranca.PeixeHerac;
import org.pedro.injecao_depen.CachorroInjecDepe;
import org.pedro.injecao_depen.ComportAndarInjecDepe;
import org.pedro.injecao_depen.ComportNadarInjecDepe;
import org.pedro.injecao_depen.PeixeInjecDepe;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int escolhaOpcao;

        do {
            System.out.println("Escolha um tipo de acomplamento");
            System.out.println("1.Herança");
            System.out.println("2.Composição");
            System.out.println("3.Injeção de dependencia");
            System.out.println("0-Sair");
            escolhaOpcao = scanner.nextInt();

            scanner.nextLine();

            switch (escolhaOpcao){
                case 1:
                    CachorroHerac cachorroHerac = new CachorroHerac("Bob");

                    PeixeHerac peixeHerac = new PeixeHerac("Nemo");

                    System.out.printf("O cachorro está " );
                    cachorroHerac.andar();

                    System.out.printf("O cachorro está " );
                    cachorroHerac.nadar();

                    System.out.printf("O peixe está " );
                    peixeHerac.andar();

                    System.out.printf("O peixe está " );
                    peixeHerac.nadar();
                    
                    break;

                case 2:
                    CachorroComp cachorroComp = new CachorroComp("Roberto");

                    PeixeComp peixeComp = new PeixeComp("Rodrigo");

                    System.out.printf("O cachorro está " );
                    cachorroComp.andar();

                    System.out.printf("O peixe está " );
                    peixeComp.nadar();

                    break;

                case 3:
                    ComportAndarInjecDepe comportAndarInjecDepe = new ComportAndarInjecDepe();
                    ComportNadarInjecDepe comportNadarInjecDepe = new ComportNadarInjecDepe();

                    CachorroInjecDepe cachorroInjecDepe = new CachorroInjecDepe("João", comportAndarInjecDepe);

                    PeixeInjecDepe peixeInjecDepe = new PeixeInjecDepe("Daniel", comportNadarInjecDepe);

                    System.out.printf("O cachorro está " );
                    cachorroInjecDepe.andarInjecDepe();

                    System.out.printf("O peixe está " );
                    peixeInjecDepe.nadar();

                    break;

                case 0:
                    break;

                default:
                    System.out.println("Opção inválida");
                    break;
            }

        }while(escolhaOpcao != 0);
    }
}