package com.victorparma.cursomc.services;

import javax.mail.internet.MimeMessage;

import org.springframework.mail.SimpleMailMessage;

import com.victorparma.cursomc.domain.Cliente;
import com.victorparma.cursomc.domain.Pedido;

public interface EmailService {
	void sendOrderConfirmationEmail(Pedido obj);
	
	void sendEmail(SimpleMailMessage msg);
	
	void sendOrderConfirmationHtmlEmail(Pedido obj);
	
	void sendNewPasswordEmail(Cliente cliente, String newPass);
	
	void sendHtmlEmail(MimeMessage msg);
}
