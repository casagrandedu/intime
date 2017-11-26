package com.emporio.intime.exceptions;

public class ModelException extends Exception {
	private static final long serialVersionUID = 4049747126608813330L;

	/**
	 * Cria a exception com a mensagem padr�o da classe <code>Exeption</code>.
	 */
	public ModelException() {
		super();
	}

	/**
	 * Cria a exception com a mensagem passada como par�metro.
	 * 
	 * @param mensagem
	 *            Mensagem espec�fica da exception.
	 */
	public ModelException(String mensagem) {
		super(mensagem);
	}

	/**
	 * Cria a exception com a mensagem e causa passadas por par�metro.
	 * 
	 * @param mensagem
	 *            Mensagem espec�fica da exception.
	 * @param causa
	 *            Indica a causa que gerou essa exception.
	 */
	public ModelException(String mensagem, Throwable causa) {
		super(mensagem, causa);
	}
}
