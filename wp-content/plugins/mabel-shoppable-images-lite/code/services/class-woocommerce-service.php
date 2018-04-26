<?php

namespace MABEL_SILITE\Code\Services
{
	class Woocommerce_Service
	{
		public static function get_product($id)
		{
			return wc_get_product($id);
		}
	}
}