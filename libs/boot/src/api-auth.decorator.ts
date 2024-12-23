import { applyDecorators } from '@nestjs/common';
import { ApiSecurity } from '@nestjs/swagger';

/**
 * Swagger 认证标记
 * @returns {ApiSecurity}
 */
export const ApiAuth = () => applyDecorators(ApiSecurity('imprint'));
