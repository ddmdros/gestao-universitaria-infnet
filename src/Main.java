import java.util.Scanner;

public class Main {

    private static final Scanner sc = new Scanner(System.in);

    private static boolean ehBissexto(int ano) {
        return (ano % 4 == 0 && ano % 100 != 0) || (ano % 400 == 0);
    }

    private static int diasNoMes(int mes, int ano) {
        switch (mes) {
            case 1: case 3: case 5: case 7: case 8: case 10: case 12:
                return 31;
            case 4: case 6: case 9: case 11:
                return 30;
            case 2:
                return ehBissexto(ano) ? 29 : 28;
            default:
                return -1;
        }
    }

    private static boolean validaDigitos(String input) {
        if (input == null || input.length() != 10) {
            return false;
        }

        if (input.charAt(2) != '/' || input.charAt(5) != '/') {
            return false;
        }

        for (int i = 0; i < input.length(); i++) {
            if (i == 2 || i == 5) {
                continue;
            }
            if (!Character.isDigit(input.charAt(i))) {
                return false;
            }
        }

        return true;
    }

    private static boolean validaData(String input) {
        if (!validaDigitos(input)) {
            return false;
        }

        int dia = Integer.parseInt(input.substring(0, 2));
        int mes = Integer.parseInt(input.substring(3, 5));
        int ano = Integer.parseInt(input.substring(6, 10));

        if (ano < 1 || mes < 1 || mes > 12) {
            return false;
        }

        int maxDias = diasNoMes(mes, ano);
        return dia >= 1 && dia <= maxDias;
    }

    public static void exibeMenu() {
        System.out.println("\n*** MENU ***");
        System.out.println("1. Calcular prazo de devolução");
        System.out.println("2. Validar empréstimo");
        System.out.println("3. Calcular multa");
        System.out.println("0. Sair\n");
    }

    public static void calculaPrazoDevolucao() {
        System.out.println("Informe a data de retirada (dd/mm/aaaa):");
        String input = sc.nextLine().strip();

        if (validaData(input)) {
            int dia = Integer.parseInt(input.substring(0, 2));
            int mes = Integer.parseInt(input.substring(3, 5));
            int ano = Integer.parseInt(input.substring(6, 10));

            for (int i = 0; i < 14; i++) {
                dia++;
                if (dia > diasNoMes(mes, ano)) {
                    dia = 1;
                    mes++;
                    if (mes > 12) {
                        mes = 1;
                        ano++;
                    }
                }
            }

            System.out.printf("Data de devolução: %02d/%02d/%04d%n", dia, mes, ano);
        } else {
            System.out.println("Data inválida. Tente novamente.");
        }
    }

    public static void validaEmprestimo() {
        System.out.println("Funcionalidade não implementada nesta entrega.");
    }

    public static void calculaMulta() {
        System.out.println("Funcionalidade não implementada nesta entrega.");
    }

    public static int registraOpcao() {
        System.out.print("Escolha uma opção: ");
        String entrada = sc.nextLine().strip();

        try {
            return Integer.parseInt(entrada);
        } catch (NumberFormatException e) {
            return -1;
        }
    }

    public static void main(String[] args) {
        int opcao;

        do {
            exibeMenu();
            opcao = registraOpcao();

            switch (opcao) {
                case 1:
                    calculaPrazoDevolucao();
                    break;
                case 2:
                    validaEmprestimo();
                    break;
                case 3:
                    calculaMulta();
                    break;
                case 0:
                    System.out.println("Encerrando o programa...");
                    break;
                default:
                    System.out.println("Opção inválida. Tente novamente.");
                    break;
            }
        } while (opcao != 0);

        sc.close();
    }
}