﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Emailing;
using Volo.Abp.Emailing.Templates;
using Volo.Abp.TextTemplating;

namespace BookManagementABP.Emailing
{
    public class EmailService: ITransientDependency
    {
        private readonly IEmailSender _emailSender;
        private readonly ITemplateRenderer _templateRenderer;

        public EmailService(IEmailSender emailSender, ITemplateRenderer templateRenderer)
        {
            _emailSender = emailSender;
            _templateRenderer = templateRenderer;
        }   

        public async Task SendAsync(string targetEmail)
        {
            var emailBody = await _templateRenderer.RenderAsync(
                StandardEmailTemplates.Message,
                new
                {
                    message = "Sending email via ABP"
                }
            );

            await _emailSender.SendAsync(targetEmail, "Subject", emailBody);
        }
    }
}
