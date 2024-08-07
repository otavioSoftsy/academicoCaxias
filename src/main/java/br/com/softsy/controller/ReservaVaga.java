package br.com.softsy.controller;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

//import br.com.softsy.model.UsuarioInternoVO;
//import br.com.softsy.utils.LoginUtils;

@Controller
public class ReservaVaga {
	
	@RequestMapping(value = { "acessar-escolas", "acessarEscolas" }, method = RequestMethod.GET)
	public String acessarEscolas(HttpSession session, Model model) throws Exception {
		/*if (session.getAttribute("loginFunc") == null) {
			return "login/loginFuncionario";
		}
		/*
		 * String perfil = session.getAttribute("perfil").toString();
		 * 
		 * if (!LoginUtils.acessoAdmin(perfil)) { return "login/acesssoNegado"; }
		 */
		return "escolas/acessarEscolas";
	}
	
	@RequestMapping(value = { "dadosResponsavel" }, method = RequestMethod.GET)
	public String dadosResponsavel(HttpSession session, Model model) throws Exception {
 
		return "reservaVaga/dadosResponsavel";
	}
	
	@RequestMapping(value = { "escolher-caminho" }, method = RequestMethod.GET)
	public String escolherCaminho(HttpSession session, Model model) throws Exception {
 
		return "reservaVaga/escolherCaminho";
	}
	
	@RequestMapping(value = { "dados-aluno" }, method = RequestMethod.GET)
	public String dadosAluno(HttpSession session, Model model) throws Exception {
 
		return "reservaVaga/dadosAluno";
	}
	
	@RequestMapping(value = { "endereco-aluno" }, method = RequestMethod.GET)
	public String enderecoAluno(HttpSession session, Model model) throws Exception {
 
		return "reservaVaga/enderecoAluno";
	}
	
	@RequestMapping(value = { "listaResponsavel" }, method = RequestMethod.GET)
	public String listaResponsavel(HttpSession session, Model model) throws Exception {
 
		return "reservaVaga/listaResponsavel";
	}
	
	@RequestMapping(value = { "vagaDesejadaEscola" }, method = RequestMethod.GET)
	public String vagaDesejadaEscola(HttpSession session, Model model) throws Exception {
 
		return "reservaVaga/vagaDesejadaEscola";
	}
	
	@RequestMapping(value = { "vagaDesejadaTurno" }, method = RequestMethod.GET)
	public String vagaDesejadaTurno(HttpSession session, Model model) throws Exception {
 
		return "reservaVaga/vagaDesejadaTurno";
	}
	
	
	@RequestMapping(value = { "codigo-reserva" }, method = RequestMethod.GET)
	public String showCodigo(HttpSession session, Model model) throws Exception {
 
		return "reservaVaga/showCodigo";
	}
	
	@RequestMapping(value = { "reserva" }, method = RequestMethod.GET)
	public String reserva(HttpSession session, Model model) throws Exception {
 
		return "reservaVaga/reserva";
	}
	
	@RequestMapping(value = { "reserva-documentos" }, method = RequestMethod.GET)
	public String envioDocumentos(HttpSession session, Model model) throws Exception {
 
		return "reservaVaga/envioDocumentos";
	}
	
	
	@RequestMapping(value = { "reserva-declaracao" }, method = RequestMethod.GET)
	public String declaracao(HttpSession session, Model model) throws Exception {
 
		return "reservaVaga/imprimirDeclaracao";
	}
	
	@RequestMapping(value = { "reservas" }, method = RequestMethod.GET)
	public String listaReserva(HttpSession session, Model model) throws Exception {
 
		return "reservaVaga/listaReservas";
	}
	@RequestMapping(value = { "reserva-ficha" }, method = RequestMethod.GET)
	public String fichaMedica(HttpSession session, Model model) throws Exception {
 
		return "reservaVaga/fichaMedica";
	}
	
	@RequestMapping(value = { "dados-reserva-vaga" }, method = RequestMethod.GET)
	public String dadosReservaVaga(HttpSession session, Model model) throws Exception {
 
		return "reservaVaga/dadosReservaVaga";
	}

}
