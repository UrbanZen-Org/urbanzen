<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'urbanzen_wp');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'pass');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'H+FyN@9{|;YF)Pgq1`zhb#,+?YI0Rb[vw-(~Tu*LwY%i] -K3+-9*I 7{pW8d/m.');
define('SECURE_AUTH_KEY',  'UT-ga$1Jhg-8;gIrNZ*z`nwlx>3/NFc-TdGZ|*<aql)*ywh!H7/2U[DndNjtz;?P');
define('LOGGED_IN_KEY',    '*tZ[,9|5*QWy^%WF0/.uUgx2mT>()`17+p+CqSkq0Nl*O:CeijSu{+R{e2t63]iU');
define('NONCE_KEY',        'd5s#Am97&-| ]jO2e^{P+%[?Z]z>]D-CqT{e><)s*Nw=X4L$G&j(s6 uYqF`W_St');
define('AUTH_SALT',        '<OaJtJb:*$Y_UvZm-k+%)r70emlR0fIuGj7Yo`4fCXRfqu!4tQe}t!pSqIw%K wL');
define('SECURE_AUTH_SALT', '>Qy. c85-Oaxl^<j%1Tzmm`_7]8`tM.{-ykH!+_DU@@QVpt+zC<w1VG)gC14P@.r');
define('LOGGED_IN_SALT',   'R4}S/=C^++lNh;Q*iW4~:#}D K)P$bjsF$7TtG8LAk^RW_jk`JiHB$=?f@jr9A=1');
define('NONCE_SALT',       'ML9/+N%lWSYZ@T537C-gv4.]NXDuWBeSP;n#m*rBZ1V~8.1LZ :~,D[P{c$@N/Z=');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* Multisite */
define( 'WP_ALLOW_MULTISITE', true );
define('MULTISITE', true);
define('SUBDOMAIN_INSTALL', true);
define('DOMAIN_CURRENT_SITE', 'urbanzen.dev');
define('PATH_CURRENT_SITE', '/');
define('SITE_ID_CURRENT_SITE', 1);
define('BLOG_ID_CURRENT_SITE', 1);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');