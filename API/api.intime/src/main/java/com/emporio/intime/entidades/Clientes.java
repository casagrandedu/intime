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
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Table(name = "clientes")
public class Clientes {

	@Id
	@Column(name = "idCliente")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer idCliente;
	@Column(name = "tipo_pessoa")
	private String tipoPessoa;

	private String nome;
	private String cpf;
	private String rg;
	private String sexo;
	@Temporal(TemporalType.DATE)
	@Column(name = "data_nascimento")
	private Date dataNascimento;
	private String emailFisico;
	@Column(name = "telefone_residencial")
	private String telefoneFisico;
	private String celularFisico;

	@Column(name = "razao_social")
	private String razaoSocial;
	@Column(name = "nome_fantasia")
	private String nomeFantasia;
	@Column(name = "pessoa_contato")
	private String pessoaContato;
	private String cnpj;
	@Column(name = "inscricao_estadual")
	private String inscricaoEstadual;
	@Column(name = "email_juridico")
	private String emailJuridico;
	@Column(name = "celular_juridico")
	private String celularJuridico;
	
	private String cep;
	private String bairro;
	private String rua;
	private Integer numero;
	private String complemento;
	
	@ManyToOne(optional = false)
	@JoinColumn(name = "idEstado")
	private Estados estado;

	@ManyToOne(optional = false)
	@JoinColumn(name = "idCidade")
	private Cidades cidade;
	
	public String getCep() {
		return cep;
	}

	public void setCep(String cep) {
		this.cep = cep;
	}

	public String getBairro() {
		return bairro;
	}

	public void setBairro(String bairro) {
		this.bairro = bairro;
	}

	public String getRua() {
		return rua;
	}

	public void setRua(String rua) {
		this.rua = rua;
	}

	public Integer getNumero() {
		return numero;
	}

	public void setNumero(Integer numero) {
		this.numero = numero;
	}

	public String getComplemento() {
		return complemento;
	}

	public void setComplemento(String complemento) {
		this.complemento = complemento;
	}

	public Estados getEstado() {
		return estado;
	}

	public void setEstado(Estados estado) {
		this.estado = estado;
	}

	public Cidades getCidade() {
		return cidade;
	}

	public void setCidade(Cidades cidade) {
		this.cidade = cidade;
	}

	public String getEmailJuridico() {
		return emailJuridico;
	}

	public void setEmailJuridico(String emailJuridico) {
		this.emailJuridico = emailJuridico;
	}

	public String getCelularJuridico() {
		return celularJuridico;
	}

	public void setCelularJuridico(String celularJuridico) {
		this.celularJuridico = celularJuridico;
	}

	public String getTipoPessoa() {
		return tipoPessoa;
	}

	public void setTipoPessoa(String tipoPessoa) {
		this.tipoPessoa = tipoPessoa;
	}

	public String getRazaoSocial() {
		return razaoSocial;
	}

	public void setRazaoSocial(String razaoSocial) {
		this.razaoSocial = razaoSocial;
	}

	public String getNomeFantasia() {
		return nomeFantasia;
	}

	public void setNomeFantasia(String nomeFantasia) {
		this.nomeFantasia = nomeFantasia;
	}

	public String getPessoaContato() {
		return pessoaContato;
	}

	public void setPessoaContato(String pessoaContato) {
		this.pessoaContato = pessoaContato;
	}

	public String getCnpj() {
		return cnpj;
	}

	public void setCnpj(String cnpj) {
		this.cnpj = cnpj;
	}

	public String getInscricaoEstadual() {
		return inscricaoEstadual;
	}

	public void setInscricaoEstadual(String inscricaoEstadual) {
		this.inscricaoEstadual = inscricaoEstadual;
	}

	public Integer getIdCliente() {
		return idCliente;
	}

	public void setIdCliente(Integer idCliente) {
		this.idCliente = idCliente;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getCpf() {
		return cpf;
	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
	}

	public String getRg() {
		return rg;
	}

	public void setRg(String rg) {
		this.rg = rg;
	}

	public String getSexo() {
		return sexo;
	}

	public void setSexo(String sexo) {
		this.sexo = sexo;
	}

	public Date getDataNascimento() {
		return dataNascimento;
	}

	public void setDataNascimento(Date dataNascimento) {
		this.dataNascimento = dataNascimento;
	}

	public String getEmailFisico() {
		return emailFisico;
	}

	public void setEmailFisico(String emailFisico) {
		this.emailFisico = emailFisico;
	}

	public String getTelefoneFisico() {
		return telefoneFisico;
	}

	public void setTelefoneFisico(String telefoneFisico) {
		this.telefoneFisico = telefoneFisico;
	}

	public String getCelularFisico() {
		return celularFisico;
	}

	public void setCelularFisico(String celularFisico) {
		this.celularFisico = celularFisico;
	}
}
