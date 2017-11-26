package com.emporio.intime.entidades;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "pedidos")
public class Pedidos {

	@Id
	@Column(name = "idPedido")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer idPedido;
	@Column(name = "data_pedido")
	private Date dataPedido;
	
	@Column(name = "data_entrega")
	private Date dataEntrega;

	@ManyToOne(optional = false)
	@JoinColumn(name = "idCliente")
	private Clientes cliente;

	@ManyToOne(optional = false)
	@JoinColumn(name = "idTipoServico")
	private TiposServicos tipoServico;

	@ManyToOne(optional = false)
	@JoinColumn(name = "idProcesso")
	private Processos processo;

	private String statusProcesso;
	
	@Column(name = "qtd_p")
	private Integer qtdP;
	@Column(name = "qtd_m")
	private Integer qtdM;
	@Column(name = "qtd_g")
	private Integer qtdG;
	@Column(name = "qtd_gg")
	private Integer qtdGG;
	@Column(name = "qtd_xgg")
	private Integer qtdXGG;

	public Integer getQtdGG() {
		return qtdGG;
	}

	public void setQtdGG(Integer qtdGG) {
		this.qtdGG = qtdGG;
	}

	public Integer getQtdXGG() {
		return qtdXGG;
	}

	public void setQtdXGG(Integer qtdXGG) {
		this.qtdXGG = qtdXGG;
	}

	public Integer getQtdP() {
		return qtdP;
	}

	public void setQtdP(Integer qtdP) {
		this.qtdP = qtdP;
	}

	public Integer getQtdM() {
		return qtdM;
	}

	public void setQtdM(Integer qtdM) {
		this.qtdM = qtdM;
	}

	public Integer getQtdG() {
		return qtdG;
	}

	public void setQtdG(Integer qtdG) {
		this.qtdG = qtdG;
	}

	public String getStatusProcesso() {
		return statusProcesso;
	}

	public void setStatusProcesso(String statusProcesso) {
		this.statusProcesso = statusProcesso;
	}

	public Clientes getCliente() {
		return cliente;
	}

	public void setCliente(Clientes cliente) {
		this.cliente = cliente;
	}

	public TiposServicos getTipoServico() {
		return tipoServico;
	}

	public void setTipoServico(TiposServicos tipoServico) {
		this.tipoServico = tipoServico;
	}

	public Processos getProcesso() {
		return processo;
	}

	public void setProcesso(Processos processo) {
		this.processo = processo;
	}

	public Date getDataEntrega() {
		return dataEntrega;
	}

	public void setDataEntrega(Date dataEntrega) {
		this.dataEntrega = dataEntrega;
	}

	public Integer getIdPedido() {
		return idPedido;
	}

	public void setIdPedido(Integer idPedido) {
		this.idPedido = idPedido;
	}

	public Date getDataPedido() {
		return dataPedido;
	}

	public void setDataPedido(Date dataPedido) {
		this.dataPedido = dataPedido;
	}

}
