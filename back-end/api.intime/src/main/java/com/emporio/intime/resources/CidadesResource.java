package com.emporio.intime.resources;

import java.util.List;

import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.emporio.intime.daos.CidadesDAO;
import com.emporio.intime.entidades.Cidades;

@Path("/cidades")
public class CidadesResource {
	
	@Inject
	private CidadesDAO dao;

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<Cidades> getAll() {
		return dao.getAll();
	}

	@GET
	@Path("/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Cidades findById(@PathParam("id") Integer idCidade) {
		return dao.findById(idCidade);
	}
	
	@GET
	@Path("/{idEstado}")
	@Produces(MediaType.APPLICATION_JSON)
	public List<Cidades> getByEstado(@PathParam("idEstado") Integer idEstado){
		return dao.getCidadesPorEstado(idEstado);
	}

	@PUT
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Cidades atualizar(Cidades cidade) {
		return dao.atualizar(cidade);
	}

	@DELETE
	@Path("/{id}")
	public Response deletar(@PathParam("id") Integer idCidade) {
		dao.deletar(idCidade);
		return Response.ok("Cidade removido com sucesso!").build();
	}

	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Cidades salvar(Cidades cidade) {
		return dao.salvar(cidade);
	}


}
