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

import com.emporio.intime.daos.ProcessosDAO;
import com.emporio.intime.entidades.Processos;

@Path("/processos")
public class ProcessosResource {
	
	@Inject
	private ProcessosDAO dao;

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<Processos> getAll() {
		return dao.getAll();
	}

	@GET
	@Path("/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Processos findById(@PathParam("id") Integer idProcesso) {
		return dao.findById(idProcesso);
	}

	@PUT
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Processos atualizar(Processos processo) {
		return dao.atualizar(processo);
	}

	@DELETE
	@Path("/{id}")
	public Response deletar(@PathParam("id") Integer idProcesso) {
		dao.deletar(idProcesso);
		return Response.ok("Processo removido com sucesso!").build();
	}

	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Processos salvar(Processos processo) {
		return dao.salvar(processo);
	}

}
